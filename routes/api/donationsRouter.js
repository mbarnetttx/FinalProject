// Dependencies
const router = require("express").Router();
const donations = require("./index");

// Item routes
router.use("/index", donations);

//Exporting
module.exports = router;
