import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
// import FilteredBoats from "../FilteredBoats";
import Select from "react-select";


 const options = [
  { value: "1", label: "1 passenger" },
  { value: "2", label: "2 passengers" }
 ];

class SearchCapacity extends React.Component {
  state = {
    SearchCapacity: null,
    search: "",
    boats: [], 
    passengers: ""
  };

// handleInputChange = event => {
//   let value = event.target.value;
//   const name = event.target.name;

//   this.setState({
//     [name]: value
//   });


handleChange = (SearchCapacity) => {
  this.setState({ SearchCapacity });
  console.log(`Min Capacity:`, SearchCapacity);
}

// handleFormSubmit = event => {
//   event.preventDefault();
//   this.setState({
//     boats: "",
//     package: "",
//     activity: "",
//     date: "",
//     search: ""
//   });
// }

// render() {
//   return (

// const SearchForm = props => (
 render() {

  const { SearchCapacity } = this.state;
 return (

    /* // handleFormSubmit={this.handleFormSubmit}
    // handleInputChange={this.handleInputChange}
    // boats={this.state.boats}
   */
      
      /* <label htmlFor="date">Trip Date:</label> */
        /* <input 
          value={this.state.searchDate}
          onChange={this.handleInputChange}
          name="searchDate"
          list="dates"
          type="date"
          placeholder="Trip Date"
          // className="form-control"
          id="date"
        /> */
      <Select
          // componentClass="select"         
          value={SearchCapacity}
          onChange={this.handleChange}
          name="SearchCapacity"
          // type="integer"
          placeholder="Party Size"
          // id="partySize"
          options={options}
        />  

          /* <input
          // componentClass="select" 
          placeholder="Activity"
          value={this.state.searchActivity} 
          onChange={this.handleInputChange} 
          name='activity'
          id="activity"
          list="activities"
          type="select"
        />  */
        //   <Select 
        // name="searchActivity"
        // value={searchActivity}
        // onChange={this.handleChange}
        // placehodler="Search by Activity"
        // options={options}
        // />
        // <datalist id="activities">
        // {this.state.boats.map(activity => <option value={activity} key={activity} />)}
        // </datalist> 
          /* <button 
      type="submit"
      id="searchBttn"
      onClick={this.handleFormSubmit}
    >
      <i className="fas fa-search"></i>
    </button> */
    //  <button onClick={this.handleFormSubmit}
    //     type="success"
    //     className="input-lg"
    //     > Search
    //     </button> 
    
 
  );
      }
    }
        /* /* <option value="Party Size">Party Size</option>
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
          </select> */
/*       
        <select
          // componentClass="select" 
          placeholder="Activity"
          value={this.state.activity} 
          onChange={this.handleInputChange} 
          name='activity'
          id="activity"
        >  */
  /* <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Activity</option> */ 
          /* <option value="Cruising">Cruising</option>
          <option value="Fishing">Fishing</option>
          <option value="Watersports">Watersports</option>
        </select> */
        /* <datalist id="boats">
          {this.state.boats.map(boat => <option value={boat}
            key={boat._id}
            boat={boat}
            />
          )} </datalist> */
          /* // <option value={boat} key={boat} />)}   */
        
        /* <button
          type="submit"
          id="searchBttn"
          onClick={this.handleFormSubmit}
          className="btn btn-success"
        >
          <i className="fas fa-search">xx</i>
      </button>
    </div>
  </form> */ 

       





/*       
       <Input />
        // value={this.state.date}
        // onChange={this.handleInputChange}
//         name="date"
//         list="dates"
//         type="date"
//         placeholder="Trip Date"
//         id="dateSelect"
//         />
//     </FormGroup>{' '}
//     <FormGroup className="input">         
//       <FormControl componentClass="select"          */
/* //         // value={this.state.passengers}
//         // onChange={this.handleInputChange}
//         name="passengers"
//         placeholder="Party Size"
//         id="partySize">
//         <option value="Party Size">Party Size</option>
//         <option value="1">1 passenger</option>
//         <option value="2">2 passengers</option>
//         <option value="3">3 passengers</option>
//         <option value="4">4 passengers</option>
//         <option value="5">5 passengers</option>
//         <option value="6">6 passengers</option>
//         <option value="7">7 passengers</option>
//         <option value="8">8 passengers</option>
//         <option value="9">9 passengers</option>
//         <option value="10">10 passengers</option>
//         <option value="11">11 passengers</option>
//         <option value="12">12+ passengers</option>               
//       </FormControl>
//     </FormGroup>{' '}
//     <FormGroup class="input">
//     {/* <ControlLabel>Select Activity</ControlLabel> */




export const SearchCapacity;
