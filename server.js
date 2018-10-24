const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.get('/boats', function(req, res) {
//   res.redirect('/api/boats');
// });

// app.use(function(req, res, search) {
//   console.log('refining search...');
//       search();
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/boatOuter");


// app.listen(port, () => console.log(`Listening on port ${port}`));
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

  