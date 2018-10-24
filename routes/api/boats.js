const router = require("express").Router();
const boatsController = require("../../controllers/boatsController");

// Matches with "/api/boats"
router.route("/")
  .get(boatsController.findAll)
  // .catch(err => res.status(422).json(err));
  .post(boatsController.create)


// Matches with "/api/boats/:activity"
router
  .route("/:activity")
  .get(boatsController.SearchActivity)
//   .put(boatsController.update)
//   .delete(boatsController.remove);

router
.route("/:passengers")
.get(boatsController.searchActivity)
module.exports = router;
