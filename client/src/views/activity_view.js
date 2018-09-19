const PubSub = require('../helpers/pubsub.js');

const ActivityView = function(element){
  this.element = element;
}

ActivityView.prototype.bindEvents = function () {
  console.log('ready to render');
};

ActivityView.prototype.render = function () {

};

module.exports = ActivityView;
