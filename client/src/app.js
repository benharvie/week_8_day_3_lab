const ActivityFormView = require('./views/activity_form_view.js');
const Activities = require('./models/activities.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketlistForm = document.querySelector('#bucketlist-form')
  const activityFormView = new ActivityFormView(bucketlistForm);
  activityFormView.bindEvents();

  const activities = new Activities();
  activities.bindEvents();

});
