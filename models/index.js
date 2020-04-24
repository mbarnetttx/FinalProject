// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const donations = new Schema({
	id: { type: integer, required: true },
	user: { type: String, required: true },
    date: { type: Date, default: Date.now },
    lunchNumb: {type: integer, required: true}
});

//Setting schema to variable
const Item = mongoose.model("Item", donations);

//Exporting
module.exports = Item;