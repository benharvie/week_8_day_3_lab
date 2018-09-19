const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection){
  const router = express.Router();

  router.get('/', (req, res) => { // GET
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get('/:id', (req, res) => { // SHOW
    const id = req.params.id;
    collection
      .find({ _id: ObjectID(id) })
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  router.post('/', (req, res) => { // INSERT
    const data = req.body;
    collection
      .insertOne(data)
      .then(() => {
        collection
          .find()
          .toArray()
          .then((docs) => {
            res.json(docs)
          })
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.put('/:id', (req, res) => { // UPDATE
    const id = req.params.id;
    const data = req.body;
    collection
      .updateOne({ _id: ObjectID(id) }, { $set: data })
      .then(() => {
        collection
          .find()
          .toArray()
          .then((docs) => res.json(docs))
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.delete('/:id', (req, res) => { // DELETE
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => {
        collection
          .find()
          .toArray()
          .then((docs) => res.json(docs))
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });


  return router;
};

module.exports = createRouter;
