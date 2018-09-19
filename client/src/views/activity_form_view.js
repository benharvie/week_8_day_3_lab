const PubSub = require('../helpers/pubsub.js');

const ActivityFormView = function(element){
  this.element = element;
}

ActivityFormView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBucketlist = {
      name: event.target.name.value,
      location: event.target.location.value,
      completed: false
    };
    PubSub.publish('ActivityView:bucketlist-submitted', newBucketlist);
  });
};

module.exports = ActivityFormView;
