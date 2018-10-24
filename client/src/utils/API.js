import axios from "axios";

export default {
  getBoats: function() {
    return axios.get("api/boats");
  },

  // Search Boats
  // searchByCapacity: function(partySize) {
  //   return axios.get("/api/boats/" + partySize + "/passengers");
  // },
  // searchBoats: function(query) {
  //   return axios.get("/api/boats/", { params: { q: query } });
  // },
  searchActivity: function(req, res) {
    return axios.get("api/boats/:activity");
    //   boatOuter.find({}).then(function(results) {
    //     Activity.find({activity: req.params.activity})
    //     })
    //   })
    // } );
    // .then(({ data }) => {
    // this.setState({ results: data.data })
    // })
  
  },
  // searchCapacity: function(newSearch) {
  //   return axios.get("/api/boats/:passengers" + newSearch);
  // },

  search: function(params) {
    return axios.get("api/boats/search", {
      params: params
    });
  }

  

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
  // loadBoats: function() {
  //   return axios.get("/api/boats/")
  //   .then(res => {
  //     this.setState({ userData: res.data });
  //     console.log(this.state.newSearch);
  //   });
 
};
