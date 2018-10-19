const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Boats collection and inserts the boats below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/boatOuter"
);

const boatsSeed = [
  {
     boat_name: "Tablada",
     package: "Private",
     listing_name: "Luxury Sport Yacht",
     passengers: 16,
     captain: "John Smith",
     activity: "Crusing",
    //  availability: { "2018/10/28"
    //    }
   },
   {
     boat_name: "Yhandi",
     package: "Shared",
     listing_name: "Fishing Charter",
     captain: "Raul",
     passengers: 10,
     activity: "Fishing"
   },
   {
     boat_name: "Yeezus",
     package: "Private",
     listing_name: "Sailboat",
     captain: "Raul",
     passengers: 12,
     activity: "Crusing"
   },
   {
     boat_name: "Doulaboat",
     package: "Shared",
     listing_name: "Catamaran",
     captain: "Annabelle",
     passengers: 7,
     activity: "Crusing"
   },
   {
     boat_name: "Belle",
     package: "Shared",
     listing_name: "Sport Fishing Charter",
     captain: "Annabelle",
     passengers: 10,
     activity: "Fishing",
   },
   {
     boat_name: "issaboat",
     package: "Shared",
     listing_name: "Ski boat, Wakeboard, Parties",
     captain: "Isabel",
     passengers: 5,
     activity: "Watersports"
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
