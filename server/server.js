const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');
const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucketlist');
    const activitiesCollection = db.collection('activities');
    const activitiesRouter = createRouter(activitiesCollection);
    app.use('/api/activities', activitiesRouter);
  })
  .catch(console.err);

app.use(parser.json());

app.listen(3000, function() {
  console.log("Server started!");
});
