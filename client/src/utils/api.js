import axios from "axios";

export default {
	// Gets all items
	getDonations: function () {
		return axios.get("/api/items");
	},
	// Gets the item with the given id
	getDonations: function (id) {
		return axios.get("/api/items/" + id);
	},
	updateDonations: function (id, donations) {
		return axios.put("/api/items/" + id, donations);
	},
	// Deletes the item with the given id
	deleteDonations: function (id) {
		return axios.delete("/api/items/" + id);
	},
	// Saves an item to the database
	saveDonations: function (donations) {
		return axios.post("/api/items", donations);
	},