import axios from "axios";

export default {
	// Gets all items
	getDonations: function () {
		return axios.get("/index");
		
	},
	// Gets the item with the given id
	getDonations: function (id) {
		return axios.get("/index" + id);
	},
	updateDonations: function (id, donations) {
		return axios.put("/index" + id, donations);
	},
	// Deletes the item with the given id
	deleteDonations: function (id) {
		return axios.delete("/index" + id);
	},
	// Saves an item to the database
	saveDonations: function (donations) {
		return axios.post("/index", donations);
	}