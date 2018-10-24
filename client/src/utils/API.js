import axios from "axios";

export default {

  // Search Boats
  searchByCapacity: function(partySize) {
    return axios.get("/api/boats/" + partySize + "/passengers");
  },
  searchBoats: function(query) {
    return axios.get("/api/boats", { params: { q: query } });
  },

  

  // // Saves a book to the database
  // saveBoat: function(searchData) {
  //   return axios.post("/api/search", searchData);
  // }
  // filterSearch: function(query) {
  //   return axios.use(function(req, res, search) {
  //     console.log('refining search...');
  //     search();
  //   })
  // Gets all boats
  getBoats: function() {
    return axios.get("/api/boats");
  }
};
