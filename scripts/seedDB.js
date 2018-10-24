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
     passengers: 22,
     captain: "John Smith",
     activity: "Cruising",
     boatSize: "15-20 FT",
     href: "",
     image: "http://static4.uk.businessinsider.com/image/5925a7b158235123008b49aa/this-company-offers-smart-yacht-ownership-for-elites-who-dont-have-time-to-sail-year-round.jpg",
     availability: ["2018/10/27", "2018/10/28"] 
   },
   {
     boat_name: "Yhandi",
     package: "Shared",
     listing_name: "Fishing Charter",
     captain: "Raul",
     passengers: 10,
     activity: "Fishing",
     boatSize: "15-20 FT",
     href: "",
     image: "https://www.shareafishingcharter.com/jm-img/sm-hero.jpg",
     availability: ["2018/10/27", "2018/10/28"] 
   },
   {
     boat_name: "Yeezus",
     package: "Private",
     listing_name: "Sailboat",
     captain: "Raul",
     passengers: 12,
     activity: "Cruising",
     boatSize: "15-20 FT",
     href: "",
     image: "https://images.unsplash.com/photo-1512602110-67198e50f815?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=950989aa7f17946a8fa9344108af9d96&auto=format&fit=crop&w=750&q=80",
     availability: ["2018/10/27", "2018/10/28"] 
   },
   {
     boat_name: "Doulaboat",
     package: "Shared",
     listing_name: "Catamaran",
     captain: "Annabelle",
     passengers: 7,
     activity: "Cruising",
     boatSize: "30-40 FT",
     href: "",
     image: "https://www.catamarans-fountaine-pajot.com/wp-content/uploads/2018/01/photos-lucia-405-1330x800.jpg",
     availability: ["2018/10/27", "2018/10/28"] 
   },
   {
     boat_name: "Belle",
     package: "Shared",
     listing_name: "Sport Fishing Charter",
     captain: "Annabelle",
     passengers: 10,
     activity: "Fishing",
     boatSize: "30-40 FT",
     href: "",
     image: "http://www.gulfshores.com/!userfiles/subheads/LEISURE/Play/dwp_GSOB_fishing_051619_860_no_name_website.jpg",
     availability: ["2018/10/27", "2018/10/28"] 
   },
   {
     boat_name: "issaboat",
     package: "Shared",
     listing_name: "Ski boat, Wakeboard, Parties",
     captain: "Isabel",
     passengers: 5,
     activity: "Watersports",
     boatSize: "15-20 FT",
     href: "",
     image: "https://prestigewatersports.com/wp-content/uploads/2018/04/moomba.jpg",
     availability: ["2018/10/27", "2018/10/28"] 
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
