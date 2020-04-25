// Dependencies
const router = require("express").Router();
const donationsController = require("../../controllers/donationsController.js");

// Matches with "/api/items"
router.route("/").get(donationsController.findAll).post(donationsController.create);

// Matches with "/api/items/:id"
router
	.route("/:id")
	.get(donationsController.findById)
	.put(donationsController.update)
	.delete(donationsController.remove);

// Exporting
module.exports = router;