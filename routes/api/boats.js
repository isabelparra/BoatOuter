const router = require("express").Router();
const boatsController = require("../../controllers/boatsController");

// Matches with "/api/boats"
router.route("/")
  .get(boatsController.findAll)
  // .then(({ data: { results } }) => res.json(results))
  // .catch(err => res.status(422).json(err));
  .post(boatsController.create)


// Matches with "/api/boats/:activity"
router
  .route("/:activity")
  .get(boatsController.findByActivity)
//   .put(boatsController.update)
//   .delete(boatsController.remove);

module.exports = router;
