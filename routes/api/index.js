const router = require("express").Router();
const boatsRoutes = require("./boats");
const usersRoutes = require("./users");

// Boats routes
router.use("/boats", boatsRoutes);
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

//Users routes
router.use("/users", usersRoutes);

module.exports = router;
