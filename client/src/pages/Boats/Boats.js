import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import BoatCard from "../../components/BoatCard";
import { Container } from "../../components/Grid";
// import { gridInstance } from "../../components/gridInstance";
import API from "../../utils/API";
import { Grid, Row, Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";
// import "../../App.css"
import "./Boats.css"
import SearchForm from "../../components/SearchForm";
import FilteredBoats from "../../components/FilteredBoats";
import Select from "react-select";
import SearchResults from "../../components/SearchResults";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";

// const options = [
//   { value: "1", label: "1 passenger" },
//   { value: "2", label: "2 passengers" },
//   { value: "3", label: "3 passenger" }
// ];



class Boats extends Component {
  state =  {
 
 search: "",
 boat: {},
 boats: [],
 results: [],
 activity: ""
  };

    //   search: "",
    //   boats: [],
    //   package: "",
    //   date: "",
    //   passengers: "",
    //   activitySelect: null,
    //   results: [], 
    //   error: ""
    // };
  // }

componentDidMount() {
  this.loadBoats();
}

loadBoats = () => {
  API.getBoats()
  .then(res => this.setState ({ boats: res.data, activity: "" }))
  .catch(err => console.log(err));
}
//    API.getBoats()
//   .then(res => this.setState({ boats: res.data.message }))
//   .catch(err => console.log(err));
//   }

  // componentDidMount() {
  //   API.getBoats(this.props.match.params.activity)
  //  .then(res => this.setState({ boats: res.data }))
  //  .catch(err => console.log(err));
  //  }






 handleInputChange = event => {
   const { name, value } = event.target;
   this.setState({ [name]: value 
  });
  //  console.log(activitySelect);
 };
//   console.log(e.target.value);
//   var value = this.state.optionsdata.filter(function(boat) {
//     return boat.key == e.target.value
//   })
//   console.log(value[0].value);
// }

// filterBoats = (FilteredBoats) => {
//   let search = this.state.boats
//   search = search.filter((boat) => {
//     let boatDate = boat.date.toString() 
//     return date.indexOf(
//       FilteredBoats) !== -1
//     }
//     )
//     this.setState({
//       search
//     })
 
// }


    // boats = data.res.map((boat) => {
      // return(
//         <div key={boat.activity}>
        
//         </div>
//       )
//     })
//     this.setState({boats: boats});
//     console.log("state", this.state.boats);
//   })
// }



//  handleInputChange = (activitySelect) => {
//    this.setState({ activitySelect });
//    console.log(activitySelect);
//  }

//   const { name, value } = event.target;
//   //  consolelog(e.target.value);
//   //  var value = this.state.opt
//    this.setState({ [name]: value });
//  };

handleFormSubmit = event => {
//  const searchType = event.target.attributes.getNamedItem("data-value").value;
// const newState = { ...this.state };

//  if (searchType === "activity") {
//  newState.match = ;

//   } else {
//     newState.match = false;
//   }
 event.preventDefault();
API.searchBoats(this.state.search)
.then(res => { 
if (res.data.status === "error") {
 throw new Error(res.data.message);
 }
  // console.log(res);
  this.setState ({ results: res.data.message, error: "" });
})
.catch(err => this.setState({ error: err.message }));

 };

   // const { name, value } = event.target;
//  this.setState({ newState });
//  this.newSearch();
// };


// newSearch = () => {
//   API.searchBy()
//   .then(res =>
//     this.setState({
//       boats: res.data.message
//     })
//     )
//     .catch(err => console.log(err));
// };

//  handleFormSubmit = event => {
//   event.preventDefault(); 
//  API.searchBoats(this.state.search)
 
//   //  package: this.state.package,
//   // date: this.state.date
// .then(res =>  
//   if (res.data.status === "error") {
//     throw new Error(res.data.activity);
//   }
//   // console.log(res);
//   this.setState ({ boats: res.data }))
//  .catch(err => console.log(err));
// };






// componentDidMount() { */}
  /* API.getBoats(this.props.match.params.id)
  .then(res => this.setState({ boat: res.data}))
  .catch(err => console.log(err));
} */

  render() {
    
    return (

      <Container>

  
        <SearchForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        boats={this.state.boats}
        // name="search"
        // value={this.state.search}
        /> 
  
            
     
        
        
        
      <Jumbotron>
        <h1>Results</h1>
      </Jumbotron>
{/*       
        <SearchResults
        results={this.state.results}
        /> */}
        {/* <List>
        {this.state.results.map(boat => ( */}
          <BoatCard
          key={this.state.boat._id}
          boat={this.state.boat}
          />
        {/* ))} */}
        {/* </List> */}
     
          </Container>
          );
              }
          
  }
          
 





export default withRouter(Boats);
