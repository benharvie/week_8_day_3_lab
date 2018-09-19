const PubSub = require('../helpers/pubsub.js');
const Request = require('../helpers/request.js');

const Activities = function (){
  this.url = 'http://localhost:3000/api/activities';
  this.request = new Request(this.url);
}

Activities.prototype.bindEvents = function () {
  PubSub.subscribe('ActivityView:bucketlist-submitted', (event) => {
    const newActivity = event.detail;
    this.request.post(newActivity)
      .then((newActivity) => {
        PubSub.publish('Activities:activity-loaded', newActivity);
      })
      .catch(console.error)
  });
};

module.exports = Activities;
