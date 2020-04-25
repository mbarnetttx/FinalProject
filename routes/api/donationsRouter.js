// Dependencies
const router = require("express").Router();
const donations = require("./donationsRouter");

// Item routes
router.use("/index", donations);

//Exporting
module.exports = router;
