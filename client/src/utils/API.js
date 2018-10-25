import axios from "axios";

export default {
  getBoats: function() {
    return axios.get("api/boats");
  },
  // searchBoats: function(query) {
  //   return axios.get("/api/boats/", { params: { q: query } });
  // },
  // searchActivity: function(req, res) {
  //   return axios.get("api/boats/:activity");
  // },
  search: function(params) {
    return axios.get("api/boats/search", {
      params: params
    });
  }
};
