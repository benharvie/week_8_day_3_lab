const PubSub = require('../helpers/pubsub.js');
const Request = require('../helpers/request.js');

const Activities = function (){
  this.url = 'http://localhost:3000/api/activities';
  this.request = new Request(this.url);
}

Activities.prototype.bindEvents = function () {
  PubSub.subscribe('ActivityView:bucketlist-submitted', (event) => {
    console.log(event.detail);
  });
};

module.exports = Activities;
