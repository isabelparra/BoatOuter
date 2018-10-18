const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const captainsSchema = new Schema({
  captain: { type: String, required: true },  
  boatNames: { type: Boolean, required: true },
  email: { type: email, required: true }
});

const Captains = mongoose.model("Captain", captainsSchema);

module.exports = captains;
