const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatsSchema = new Schema({
  type: { type: Boolean, required: true },
  passengers: { type: String, required: true },
  activity: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Boats = mongoose.model("Boat", boatsSchema);

module.exports = Boats;
