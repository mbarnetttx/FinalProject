// Dependencies
// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const donationsRoutes = require("./donationsRouter");



// Item routes
router.use("/donations", donationsRoutes);

//Exporting
module.exports = router;






