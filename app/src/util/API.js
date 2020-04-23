import axios from "axios";

// modify to GET donations information from the database
export default {
    getDonations: function(query) {
      return axios.get("/api/donations", { params: { q: query } });
    }
  };
  