// Dependencies
// const router = require("express").Router();
const router = require("express").Router();
const donationsRoutes = require("./donationsRouter");

// Item routes
router.use("/donations", donationsRoutes);

//Exporting
module.exports = router;
