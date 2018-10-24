import React, { Component } from "react";
// import SearchActivity from "./SearchActivity";
// import SearchCapacity from "./SearchCapacity";

// Using the datalist element to autofill suggestions based on the props.activity array?

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSearch: {
                boats: [],
                activity: ""
            },
            activityOptions: ["Fishing", "Cruising", "Watersports"],
            passengersOptions: ["1 passenger", "2 passengers"]
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //clear form?
    }

    handleFormSubmit() {

    }
   render(){
       return (
           <form className="container" onSubmit={this.handleFormSubmit}>
           <SearchActivity />
           
           </form>
   
       );
   }


    // <SearchCapacity></SearchCapacity>
    // <button 
    //   type="submit"
    //   id="searchBttn"
    //   onClick={props.handleFormSubmit}
    //   className="btn btn-success"
    // >
    // </button>
    // </form>
)

export default SearchForm;
}