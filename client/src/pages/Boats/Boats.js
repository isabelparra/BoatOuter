import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BoatCard from "../../components/BoatCard";
// import { Container } from "../../components/Grid";
// import { gridInstance } from "../../components/gridInstance";
import API from "../../utils/API";
import { Grid, Row, Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";
import SearchForm from "../../components/SearchForm";
// import "../../App.css"
import "./Boats.css"
class Boats extends Component {
  state =  {
    boats: [],
    package: "",
    date: "",
    passengers: "",
    activity: "",
    search: ""  
  };

componentDidMount() {
  API.getBoats()
  .then(res => {
    console.log(res);
    this.setState ({ boats: res.data });
  });
  this.loadBoats();
}

loadBoats = () => {
  API.getBoats()
  .then(res => {
    console.log(res);
    this.setState ({ boats: res.data, package: "", date: "", passengers: "", activity: "" })
  })
  .catch(err => console.log(err));
};

handleInputChange = event => {
  const { name, value } = event.target;
    this.setState({
      [name]: value
    });
};

// handleFormSubmit = event => {
//   event.preventDefault();
  //   API.loadNewSearch({
  //     package: this.state.package,
  //     date: this.state.date
  //   })
  // .then(res => {
  //   console.log(res);
  //   this.setState ({ boats: res.data });
  // };
// }


// var FilteredBoats = React.createClass({
//   filterSearch: function(event) {
//   var updatedSearch = this.state.initialSearch;
//   updatedSearch = updatedList.filter(function(boat){
//     return boat.search(event.target.value) !== -1;
//   });
//   this.setState({boats: updatedSearch});
// }, 
// getInitialState: function(){
//   return {
//     initalSearch: [],
//     boats: []
    
//   }
// },
// componentWillMount: function(){
//   this.setState({boat: this.state.initalSearch})
// },
// render: function(){
//   return(
//     <div className="filter-boat">
// <SearchForm
// onChange={this.filterSearch}/>
// <Boat boat={this.state.boat}/>
//     </div>
//   );
// }
// });

// var Boat = React.createClass({
//   render: function(){
//     return (
//       <ul className="boat-group">
//       {this.props.boats.map(function(boat) {
//         return <li className="list-group-item" data-category={boat} key={boat}>{boat}</li>
//       })
//       }
//       </ul>
      
//     )
//   }
// });

// componentDidMount() {
//   API.getBoats(this.props.match.params.id)
//   .then(res => this.setState({ boat: res.data}))
//   .catch(err => console.log(err));
// }

  render() {
    return (
      
      // <FilteredBoats/>
      
    //   <gridInstance>
    //    boat
    // </gridInstance>
    <Grid className="container-fluid">
    <Row className="show-grid">
      {this.state.boats.map(boat => ( 
        <Col xs={12} md={5}>       
          <BoatCard
            key={boat._id}
            boat={boat}
            />
          </Col>
        ))}  
        <Col>
       <div id="refineSearch">
       {/* <SearchForm
       className="refine"
       > */}
       <Form>
       <FormGroup className="input">
       <FormControl 
      // <Input
        // value={this.state.date}
        // onChange={this.handleInputChange}
        name="date"
        list="dates"
        type="date"
        placeholder="Trip Date"
        id="dateSelect"
        />
    </FormGroup>{' '}
    <FormGroup className="input">         
      <FormControl componentClass="select"         
        // value={this.state.passengers}
        // onChange={this.handleInputChange}
        name="passengers"
        placeholder="Party Size"
        id="partySize">
        <option value="Party Size">Party Size</option>
        <option value="1">1 passenger</option>
        <option value="2">2 passengers</option>
        <option value="3">3 passengers</option>
        <option value="4">4 passengers</option>
        <option value="5">5 passengers</option>
        <option value="6">6 passengers</option>
        <option value="7">7 passengers</option>
        <option value="8">8 passengers</option>
        <option value="9">9 passengers</option>
        <option value="10">10 passengers</option>
        <option value="11">11 passengers</option>
        <option value="12">12+ passengers</option>               
      </FormControl>
    </FormGroup>{' '}
    <FormGroup class="input">
    {/* <ControlLabel>Select Activity</ControlLabel> */}
      <FormControl componentClass="select" placeholder="select"
      // <select 
        // defaultValue={this.state.activity} 
        // onChange={this.handleChange} 
        name='activity'
        id="selectActivity"
      >
      <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Select activity</option>
      <option value="Cruising">Cruising</option>
      <option value="Fishing">Fishing</option>
      <option value="Watersports">Watersports</option>
      {/* </select> */}
      </FormControl>     
    </FormGroup>{' '}
    {/* <Button inline
      type="submit"
      id="searchBttn"
      // onClick={this.props.handleFormSubmit}
    >
      <i className="fas fa-search"></i>
    </Button> */}


       </Form>
       
      
        </div>
        </Col>   
    </Row>
</Grid>

      
    );
  }
}



export default withRouter(Boats);
