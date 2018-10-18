const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.get('/api/boats', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/boatOuter");


// app.listen(port, () => console.log(`Listening on port ${port}`));
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });

  