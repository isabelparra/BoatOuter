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
     image: "https://sunsetsailsalem.com/wp-content/uploads/2017/03/salem-sailboat.jpg",
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
   },
   {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Florida Backcountry Fishing",
    captain: "Tim",
    passengers: 10,
    activity: "Fishing",
    boatSize: "30-40 FT",
    href: "",
    image: "https://dq1guhnd3lyhy.cloudfront.net/public/images/charters/1112/public/73d51ea2afdbc37710b03d080e7ab21f.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Private",
    listing_name: "Cruiser",
    captain: "Tim",
    passengers: 22,
    activity: "Cruising",
    boatSize: "30-40 FT",
    href: "",
    image: "https://www.discoverboating.com/sites/default/files/migrate-boat-types-images/motor-yachts-cruisers-image-01.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Yacht Party Rental",
    captain: "Tim",
    passengers: 22,
    activity: "Watersports",
    boatSize: "40-50 FT",
    href: "",
    image: "https://cdn.jamesedition.com/media/W1siZiIsImRhdGEvaW1hZ2VzLzI3OTgyMzg2X3NvdXJjZS5qcGciXSxbInAiLCJ0aHVtYiIsIjIwMDB4Il0sWyJwIiwid2F0ZXJtYXJrIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXN0cmlwIC1xdWFsaXR5IDgwIC1pbnRlcmxhY2UgUGxhbmUiXV0/super-yacht-co-ownership-own-a-benetti-delfino-95-from-2-450-000.jpg?sha=5adb662b55d0a20c",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Private",
    listing_name: "Laid-back Luxury and Peaceful Cruising",
    captain: "Tim",
    passengers: 12,
    activity: "Cruising",
    boatSize: "20-30 FT",
    href: "",
    image: "http://boats.iboats.com/images/newboats/2015_heros/jeanneau_boats_hero.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Catamaran",
    captain: "Tim",
    passengers: 9,
    activity: "Cruising",
    boatSize: "30 FT",
    href: "",
    image: "https://www.sailing-holidays-in-croatia.com/website/var/tmp/image-thumbnails/0/3078/thumb__contentfullimage/catamaran-rent-croatia.jpeg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Private",
    listing_name: "Sailing",
    captain: "Tim",
    passengers: 5,
    activity: "Cruising",
    boatSize: "20-30 FT",
    href: "",
    image: "https://sailo.s3.amazonaws.com/media/boats/2016/08/rental-Sail-boat-Ericson-38feet-Jersey_City-NJ_hd9mQ3Y.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Cruiser",
    captain: "Tim",
    passengers: 7,
    activity: "Cruising",
    boatSize: "20-30 FT",
    href: "",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/2e/87/e1/sterling-deck-boats-for.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Party Yacht",
    captain: "Tim",
    passengers: 20,
    activity: "Fishing",
    boatSize: "20-30 FT",
    href: "",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/06/bf/7d/34/miami-boat-rent.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Shared",
    listing_name: "Sailing Catamaran",
    captain: "Tim",
    passengers: 7,
    activity: "Cruising",
    boatSize: "20-30 FT",
    href: "",
    image: "https://www.bavariayachts.com/fileadmin/_processed_/b/2/csm_bavaria-sy-overview-cruiserline_b07e99fc83.jpg",
    availability: ["2018/10/27", "2018/10/28"] 
  },
  {
    boat_name: "Belle",
    package: "Private",
    listing_name: "Contender",
    captain: "Tim",
    passengers: 13,
    activity: "Watersports",
    boatSize: "20-30 FT",
    href: "",
    image: "https://www.wilmetteboatrentals.com/wp-content/uploads/2012/05/Boat1.jpg",
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
