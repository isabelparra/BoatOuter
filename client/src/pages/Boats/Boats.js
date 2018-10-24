import React, { Component } from "react";

/* Import Components */

import CheckBox from "../../components/CheckBox";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";
// import { Input } from "../../components/Form";

import { withRouter } from 'react-router-dom';
// import PropTypes from "prop-types";
// import BoatCard from "../../components/BoatCard";
// import { Container } from "../../components/Grid";
// // import { gridInstance } from "../../components/gridInstance";
import API from "../../utils/API";

// import { Grid, Row, Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";
// import "../../App.css"
// import "./Boats.css"
// import SearchForm from "../../components/SearchForm";
// import FilteredBoats from "../../components/FilteredBoats";
// import Select from "react-select";
// import SearchResults from "../../components/SearchResults";
// import Jumbotron from "../../components/Jumbotron";
// import { List, ListItem } from "../../components/List";
// import SearchActivity from "../../components/SearchForm";
// import SearchCapacity from "../../components/SearchForm/SearchCapacity";

// const options = [
//   { value: "1", label: "1 passenger" },
//   { value: "2", label: "2 passengers" },
//   { value: "3", label: "3 passenger" }
// ];



class Boats extends Component {
  constructor(props) {
    super(props);
    this.state = {

      newSearch: {
        package: "",
        date: "",
        activity: [],
        passengers: "",

      },
      packageOptions: ["Shared", "Private"],
      activityOptions: ["Fishing", "Cruising", "Watersports"]
    };
    this.handleCheckBox = this.handleCheckBox.bind(this); //package type
    this.handlePassengers = this.handlePassengers.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // handleSearch(e) {
  //   let value = e.target.value;
  //   this.setState(
  //     prevState => ({
  //       newSearch: {
  //         ...prevState.newSearch,
  //         name: value
  //       }
  //     }),
  //     () => console.log(this.state.newSearch)
  //   );
  // }


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

// componentDidMount() {
//   this.loadBoats();
// }

// loadBoats = () => {
//   API.getBoats()
//   .then(res => this.setState ({ boats: res.data.message }))
//   .catch(err => console.log(err));
// }
//    API.getBoats()
//   .then(res => this.setState({ boats: res.data.message }))
//   .catch(err => console.log(err));
//   }

  // componentDidMount() {
  //   API.getBoats(this.props.match.params.activity)
  //  .then(res => this.setState({ boats: res.data }))
  //  .catch(err => console.log(err));
  //  }


handlePassengers(e) {
  let value = e.target.value;
  this.setState(
    prevState => ({
      newSearch: {
        ...prevState.newSearch,
        passengers: value
      }
    }),
    () => console.log(this.state.newSearch)
  );
}

handleInput(e) {
  let value = e.target.value;
  let name = e.target.name;
  this.setState(
    prevState => ({
      newSearch: {
        ...prevState.newSearch,
        [name]: value
      }
    }),
    () => console.log(this.state.newSearch)
  );
}

handleCheckBox(e) {
  const newSelection = e.target.value;
  let newSelectionArray;

  if (this.state.newSearch.package.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.newSearch.package.filter(
      s => s !== newSelection
    );
  } else {
    newSelectionArray = [...this.state.newSearch.package, newSelection];
  }

  this.setState(prevState => ({
    newSearch: { ...prevState.newSearch, package: newSelectionArray}
  }));
}





//  handleInputChange = event => {
//   //  const { name, value } = event.target;
//    this.setState({ search: event.target.value  });
//   };
  //  console.log(activitySelect);

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

handleFormSubmit(e) {
  e.preventDefault();
  // alert('the value is:' + this.input.value);
  let userData = this.state.newSearch;

  fetch("/api/boats", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    response.json().then(data => {
      console.log("succesful search" + data);
    });
  });
  
}
  // let userData = this.state.newSearch;

  // fetch("api/boats/search", {
  //   method: "POST",
  //   body: JSON.stringify(userData),
  //   headers: {

  //   }
  // })

//  const searchType = event.target.attributes.getNamedItem("data-value").value;
// const newState = { ...this.state };

//  if (searchType === "activity") {
//  newState.match = ;

//   } else {
//     newState.match = false;
//   }
//  event.preventDefault();
// API.searchBoats(this.state.search)
// .then(res => { 
// if (res.data.status === "error") {
//  throw new Error(res.data.message);
//  }
//   // console.log(res);
//   this.setState ({ results: res.data.message, error: "" });
// })
// .catch(err => this.setState({ error: err.message }));

//  };

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
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
      <CheckBox
      title={"Package"}
      name={"package"}
      options={this.state.packageOptions}
      value={this.state.newSearch.package}
      placeholder={"Select Package Type"}
      handleChange={this.handleInput}
      />{" "}
      {/* Party Size */}
      <Input
      inputType={"number"}
      name={"passengers"}
      title={"Passengers"}
      value={this.state.newSearch.passengers}
      placeholder={"Enter your party size"}
      handleChange={this.handlePassengers}
      />{" "}
      {/* Activity Selection */}
      <Select
      title={"Activity"}
      name={"activity"}
      options={this.state.activityOptions}
      value={this.state.newSearch.activity}
      placeholder={"Select Activity"}
      handleChange={this.handleInput}
      />

      <Button
      action={this.handleFormSubmit}
      type={"primary"}
      title={"Submit"}
      // style={buttonStyle}
      />{" "}
    
      </form>

      // <Container>

  
      //   <SearchForm
      //   handleFormSubmit={this.handleFormSubmit}
      //   handleInputChange={this.handleInputChange}
      //   boats={this.state.boats}
        // name="search"
        // value={this.state.search}
        // />
        
        
       
            
     
        
    
  
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};



export default withRouter(Boats);
