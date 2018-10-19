const db = require("../models");

// Defining methods for the boatsController
module.exports = {
    findAll: function (req, res) {
        db.Captains
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: function(req, res) {
    //   db.boatOuter
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    create: function (req, res) {
        db.Captains
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
