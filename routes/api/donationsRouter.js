//  Dependencies
// const router = require("express").Router();
const router = require("express").Router();
const donationsController = require("../../controllers/donationsController");

router
	.route("/")
	.get(donationsController.findAll)
	.post(donationsController.create);

router
	.route("/:id")
	.get(donationsController.findById)
	.put(donationsController.update)
	.delete(donationsController.remove);

// Exporting
module.exports = router;
