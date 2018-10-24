import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

/* Import Components */

import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";

import BoatCard from "../../components/BoatCard";
import API from "../../utils/API";

import { Grid, Row, Col, Form, FormControl, FormGroup, Modal, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import SearchResults from "../../components/SearchResults/SearchResults";
import axios from "axios";

// import "../../App.css"
// import "./Boats.css"


class Boats extends Component {
  constructor(props) {
    super(props);
    const locationState = props.location.state.state;
    this.state = {

      newSearch: {
        package: locationState.package,
        // date: "",
        activity: locationState.activity,
        passengers: locationState.passengers, 
      },
        results: [],
        showModal: false,
        packageOptions: ["Shared", "Private"],
        activityOptions: ["Fishing", "Cruising", "Watersports"]
    };

      this.handleRadioGroup = this.handleRadioGroup.bind(this); //package type
      this.handlePassengers = this.handlePassengers.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };

componentDidMount() {
  this.fetchBoats();
}


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

handleRadioGroup(e) {
  const newSelection = e.target.value;
  let newSelectionArray;

  if (this.state.newSearch.package.indexOf(newSelection) > -1) {
    newSelectionArray = this.state.newSearch.package.filter(
      s => s !== newSelection
    );
  } 
  else {
    newSelectionArray = [...this.state.newSearch.package, newSelection];
  }

  this.setState(prevState => ({
    newSearch: { ...prevState.newSearch, package: newSelectionArray}
  }));
}

handleClose() {
  this.setState({ showModal: false });
}

handleShow() {
  this.setState({ showModal: true });
}

handleInputChange = event => {
   this.setState({ search: event.target.value });
 }

handleFormSubmit = event => {
  event.preventDefault();
    this.fetchBoats()
};


fetchBoats = () => {
  API.search(this.state.newSearch)
    .then(res => {
      if (res.data.status == "error") {
        throw new Error(res.data.message);
      }
      this.setState({ results: res.data, error: ""});
    })
   .catch(err => this.setState({ error: err.message }));
};
    
render() {
  return (
    <Grid>
      <form className="container-fluid" 
      handleFormSubmit={this.handleFormSubmit}
      handleInputChange={this.handleInputChange}
      boats={this.state}
      >
      
        {/* Package Type Button */}
        
        <RadioGroup
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
        style={buttonStyle}
        />{" "}
      
      </form>
    
      <div id="results">
        { this.state.results.map(boat =>
          <Col xs={12} md={6}>
            <BoatCard
              key={boat._id}
              boat={boat}
              onClick={this.handleShow}
            />
          </Col>  
        )}
      </div>
        {this.renderModal()}
      </Grid>
    );
  }
  renderModal = () => {
    return (
      <div>
        <Modal showModal={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Boat Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.state.listing_name}</h4>
            <p>
              {this.state.package}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );         
  }
}
  
const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default withRouter(Boats);
