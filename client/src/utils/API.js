import axios from "axios";

export default {
  // Gets all boats
  getBoats: function(query) {
    return axios.get("/api/boats");
  },
  // Gets the book with the given id
  // getBoat: function(id) {
  //   return axios.get("/api/boats/" + id);
  // },
  // Saves a book to the database
  saveBoat: function(searchData) {
    return axios.post("/api/search", searchData);
  }
};
