const router = require("express").Router();
const boatsRoutes = require("./boats");

// Book routes
router.use("/boats", boatsRoutes);
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

module.exports = router;
