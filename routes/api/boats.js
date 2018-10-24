const router = require("express").Router();
const boatsController = require("../../controllers/boatsController");

// Matches with "/api/boats"
router.route("/")
  .get(boatsController.findAll);
  // .catch(err => res.status(422).json(err));


// Matches with query
router.route("/search")
  .get(boatsController.search)

module.exports = router;
