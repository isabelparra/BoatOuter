const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Boats collection and inserts the boats below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/boatOuter"
);

const boatsSeed = [
  {
    boatName: "lil yatch",
    captain: "Raul",
    capacity: "10",
    activity: "Cruising",
   // date:
  },
  {
    boatName: "Tablada",
    captain: "Raul",
    capacity: "6",
    activity: "Fishing",
    // date:
  },
  {
    boatName: "Doula Boat",
    captain: "Annabelle",
    capacity: "4",
    activity: "Watersports",
    // date:
  },
  {
    boatName: "Belle",
    captain: "Annabelle",
    capacity: "8",
    activity: "Fishing",
    // date:
  },
  {
    boatName: "issa boat",
    captain: "Isabel",
    capacity: "12",
    activity: "Cruising",
    // date:
  },
  {
    boatName: "Fishing Trawler",
    captain: "Isabel",
    capacity: "8",
    activity: "Fishing",
    // date:
  },
    // date: new Date(Date.now())
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

const captainsSeed = [
  {
    captain: "Raul",
    boatNames: ["lil yatch", "Tablada"],
    email: "raulthecaptain@gmai.com"
  },
  {
    captain: "Annabelle",
    boatNames: ["Doula Boat", "Belle"],
    email: "belleboats@gmai.com"
  },
  {
    captain: "Isabel",
    boatNames: ["issa boat", "Fishing Trawler"],
    email: "issacaptain@gmai.com"
  },
];

db.Captains
  .remove({})
  .then(() => db.Captains.collection.insertMany(captainsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

