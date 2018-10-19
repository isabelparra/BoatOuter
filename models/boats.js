const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatsSchema = new Schema({
  package: { type: String, required: true },
  listing_name: { type: String, required: false },
  boat_name: { type: String, required: false },
  passengers: { type: String, required: true },
  activity: { type: String, required: true },
  date: { type: Date, default: Date.now },
  captain: { type: String, required: true }
  
});

const Boats = mongoose.model("Boat", boatsSchema);


// const availabilitySchema = new Schema ({
//   boat_id: { type:  },

//   date: { type: Date, default: Date.now}
// })

module.exports = Boats;
