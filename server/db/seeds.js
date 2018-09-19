use bucketlist;
db.dropDatabase();

db.activities.insertMany([
  {
    name: "Complete full stack application",
    location: "CodeClan",
    completed: false
  },
  {
    name: "Bungee jumping",
    location: "Grand Canyon",
    completed: false
  },
  {
    name: "Las Vegas",
    location: "Nevada",
    completed: true
  }
]);
