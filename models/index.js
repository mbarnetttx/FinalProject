// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const donations = new Schema({
	user: { type: String, required: true },
    date: { type: Date, default: Date.now },
    lunchNumb: {type: Number, required: true},
    donationData: {type: String, required: true}
});

//Setting schema to variable
const Item = mongoose.model("Item", donations);

//Exporting
module.exports = {Item: Item};