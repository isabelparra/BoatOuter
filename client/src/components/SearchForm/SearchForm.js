import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

 

const SearchForm = props => (
  <Form>
  {/* <Form onSubmit={this.handleFormSubmit}> */}
  {/* <div id="search">    */}
    <FormGroup className="input">
    {/* controlId="formInline" */}
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
      {/* <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Select activity</option> */}
      <option value="Cruising">Cruising</option>
      <option value="Fishing">Fishing</option>
      <option value="Watersports">Watersports</option>
      {/* </select> */}
      </FormControl>     
    </FormGroup>{' '}
    <Button inline
      type="submit"
      id="searchBttn"
      // onClick={this.props.handleFormSubmit}
    >
      <i className="fas fa-search"></i>
    </Button>
    {/* </div> */}
  </Form>
     
);

export default SearchForm;
