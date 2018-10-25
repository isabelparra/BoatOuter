const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatsSchema = new Schema({
  package: { type: String, required: true },
  listing_name: { type: String, required: false },
  boat_name: { type: String, required: false },
  passengers: { type: Number, required: true },
  activity: { type: String, required: true },
  availability: { type: String, required: false },
  captain: { type: String, required: true },
  image: { type: String, required: true },
  boatSize: { type: String, required: true },
  href: { type: String, required: false }
});

const Boats = mongoose.model("Boat", boatsSchema);

module.exports = Boats;
