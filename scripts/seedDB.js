const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Boats collection and inserts the boats below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/boatOuter:27017"
);

const boatsSeed = [
  {
    passengers: "14",
    activity:
      "Crusing",
    date: 2018/10/27
  },
  {
    passengers: "10",
    activity:
      "Fishing",
      date: 2018/10/27
  },
  {
    date: 2018/10/18,
    passengers: "5",
    activity:
      "Watersports"
  
  },
  {
    date: "18/10/18",
    passengers: "10",
    activity:
      "Fishing"
  },
  {
    date: "18/10/18",
    passengers: "7",
    activity:
      "Cruising"
    
  },
  {
    // date: "11/12/18",
    passengers: "5",
    activity:
      "Fishing"
    // date: new Date(Date.now())
  },
  {
    // date: "11/12/18",
    passengers: "10",
    activity:
      "Watersports"
    // date: new Date(Date.now())
  },
  {
    // date: "11/12/18",
    passengers: "7",
    activity:
      "Cruising"
    // date: new Date(Date.now())
  },
  {
    // date: "11/14/18",
    passengers: "7",
    activity:
      "Cruising"
  }
];

db.Boats
  .remove({})
  .then(() => db.Boats.collection.insertMany(boatsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
