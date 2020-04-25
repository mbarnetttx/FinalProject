import axios from "axios";

export default {
	// Gets all items
	getDonations: function () {
		return axios.get("/api/index");
	},
	// Gets the item with the given id
	getDonations: function (id) {
		return axios.get("/api/index/" + id);
	},
	updateDonations: function (id, donations) {
		return axios.put("/api/index/" + id, donations);
	},
	// Deletes the item with the given id
	deleteDonations: function (id) {
		return axios.delete("/api/index/" + id);
	},
	// Saves an item to the database
	saveDonations: function (donations) {
		return axios.post("/api/index", donations);
	},