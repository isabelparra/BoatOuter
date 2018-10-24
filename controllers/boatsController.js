const db = require("../models");

// Defining methods for the boatsController
module.exports = {
  findAll: function(req, res) {
    db.Boats
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchActivity: function(req, res) {
    db.boatOuter
      .find(req.params.activity)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchCapacity: function(req, res) {
    db.Boats
      .find(req.params.passengers)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
