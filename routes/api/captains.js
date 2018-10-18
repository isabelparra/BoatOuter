const router = require("express").Router();
const captainsController = require("../../controllers/captainsController");

// Matches with "/api/boats"
router.route("/")
  .get(captainsController.findAll)
  // .then({ data: { results } }) => res.json(results))
  .post(captainsController.create);

  

// Matches with "/api/captains/:id"
// router
//   .route("/:id")
//   .get(captainsController.findById)
//   .put(captainsController.update)
//   .delete(captainsController.remove);

module.exports = router;
