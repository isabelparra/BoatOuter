import axios from "axios";

export default {
  // Gets all books
  getBoats: function(query) {
    return axios.get("/api/boats");
  },
  // Gets the book with the given id
  // getBoat: function(id) {
  //   return axios.get("/api/boats/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBoats: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  saveBoat: function(searchData) {
    return axios.post("/api/search", searchData);
  }
};
