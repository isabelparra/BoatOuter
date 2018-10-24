const db = require("../models");

// Defining methods for the boatsController
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    // req.query.package
    db.Boats
      .find({ activity: req.query.activity })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // searchActivity: function(req, res) {
  //   db.Boats
  //   .find(req.query.activity)
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },
  search: function(req, res) {
    console.log(req.query);

    db.Boats
      .find({ 
        activity: req.query.activity,
        passengers: { $gte: parseInt(req.query.passengers) },
        package: req.query.package
      
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

  // searchCapacity: function(req, res) {
  //   db.Boats
  //     .find(req.params.passengers)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
