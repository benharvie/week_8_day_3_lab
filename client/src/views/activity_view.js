const PubSub = require('../helpers/pubsub.js');

const ActivityView = function(element){
  this.element = element;
}

ActivityView.prototype.bindEvents = function () {
  PubSub.subscribe('Activities:activity-loaded', (event) => {
    this.render(event.detail);
  })
};

ActivityView.prototype.render = function (activities) {
  const container = this.element;
  const bucketlist = document.createElement('ul');
  bucketlist.id = "bucketlist-list"

  activities.forEach((activity) => {
    const newActivity = document.createElement('li');
    newActivity.textContent = `${activity.name} | ${activity.location} | ${activity.completed}`
    bucketlist.appendChild(newActivity)
  })

  container.appendChild(bucketlist);
};

module.exports = ActivityView;
