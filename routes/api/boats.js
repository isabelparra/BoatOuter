const router = require("express").Router();
const boatsController = require("../../controllers/boatsController");

// Matches with "/api/boats"
router.route("/")
  .get(boatsController.findAll)
  // .then({ data: { results } }) => res.json(results))
  .post(boatsController.create);

  

// Matches with "/api/boats/:id"
// router
//   .route("/:id")
//   .get(boatsController.findById)
//   .put(boatsController.update)
//   .delete(boatsController.remove);

module.exports = router;
