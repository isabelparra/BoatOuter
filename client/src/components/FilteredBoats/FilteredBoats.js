// import React from "react";
// import { withRouter } from 'react-router-dom';
// import PropTypes from "prop-types";
// import BoatCard from "../BoatCard";

// export const FilteredBoats = props => (
//    <div className="boat-cards">{props.children}</div>
// );
  
 




  //  key={result} className="list-group-item">
  //        <img alt="Boat"
//             className="img-fluid"
//             // key={boat._id}
//             // boat={boat}
//             src={result}
//             />
       
          
//   ))}
//   </div>
// );

// class FilteredBoats extends Component {
//     state = {
//     boats: [],
//     query: ""
//   }

//   searchBoats = () => {
//     axios.get("/api/boats/" + `${this.state.query}`)
//     .then(({ data }) => {
//       this.setState ({
//         boats: data.data
//       })
//     })
//   }

  

// handleInputChange = () => {
//   this.setState({
//     query: this.search.value
//   }, () => {
//     if (this.state.query && this.state.query.length > 1) {
//       if (this.state.query.length % 2 === 0) {
//         this.searchBoats()
//       }
//     }
//   })
//   // this.props.onChange(event.target.value)
// }

// render() {
//   return (
//     // <form>
//     //   <input type="string"
//     //   id="activity"
//     //   placeholder="activity"
//     //   ref={input => this.search = input}
//     //   // value={this.state.search}
//     //   onChange={this.handleChange}
//     //   />
//     //   <p>{this.state.query}</p>
//     //   <BoatCard boat={this.state.boat} />
//     // </form>
//     <Form>
//     {/* <Form onSubmit={this.handleFormSubmit}> */}
//     {/* <div id="search">    */}
//       <FormGroup className="input">
//       {/* controlId="formInline" */}
//         <FormControl 
//         ref={input => this.search = input}
//         // <Input
//           value={this.state.date}
//          onChange={this.handleInputChange}
//           name="date"
//           list="dates"
//           type="date"
//           placeholder="Trip Date"
//           id="dateSelect"
//           />
//       </FormGroup>{' '}
//       <FormGroup className="input">         
//         <FormControl componentClass="select"         
//           value={this.state.passengers}
//           onChange={this.handleInputChange}
//           name="passengers"
//           placeholder="Party Size"
//           id="partySize">
//           <option value="Party Size">Party Size</option>
//           <option value="1">1 passenger</option>
//           <option value="2">2 passengers</option>
//           <option value="3">3 passengers</option>
//           <option value="4">4 passengers</option>
//           <option value="5">5 passengers</option>
//           <option value="6">6 passengers</option>
//           <option value="7">7 passengers</option>
//           <option value="8">8 passengers</option>
//           <option value="9">9 passengers</option>
//           <option value="10">10 passengers</option>
//           <option value="11">11 passengers</option>
//           <option value="12">12+ passengers</option>               
//         </FormControl>
//       </FormGroup>{' '}
//       <FormGroup class="input">
//       {/* <ControlLabel>Select Activity</ControlLabel> */}
//         <FormControl componentClass="select" placeholder="select"
//         // <select 
//           defaultValue={this.state.activity} 
//           onChange={this.handleInputChange} 
//           name='activity'
//           id="selectActivity"
//         >
//         {/* <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Select activity</option> */}
//         <option value="Cruising">Cruising</option>
//         <option value="Fishing">Fishing</option>
//         <option value="Watersports">Watersports</option>
//         {/* </select> */}
//         </FormControl>     
//       </FormGroup>{' '}
//       {/* <Button inline
//         type="submit"
//         id="searchBttn"
//         // onClick={this.props.handleFormSubmit}
//       >
//         <i className="fas fa-search"></i>
//       </Button> */}
//       {/* <p>{this.state.query}</p> */}
//       {/* </div> */}
//       <BoatCard boats={this.state.boats} />
//     </Form>
//   )
// }
// }
// // var FilteredBoats = React.createClass({
// //     filterSearch: function(event){
// //     var updateSearch = this.state.boats;
// //     updateSearch = updateSearch.filter(function(boat){
// //       return boat.toString().search(event.target.value.toString()) !== -1;
// //     });
// //     this.setState({boats: updateSearch});
// //   }, 
// //   getInitialState: function(){
// //     return {
// //       search: [],
// //       boats: [] 
// //     }
// //   },
// //   componentWillMount: function(){
// //     this.setState({boats: this.state.boats})
// //   },
// //   render: function(){
// //     return(
// //       <div className="filter-boat">
// //   <form>
// //     <fieldset className="form-group">
// //     <input type="date" className="form-control form-control-lg" placeholder="search" onChange={this.filterSearch}/>
// //     </fieldset>
// //   </form>
// //     <List boats={this.state.boats}/>
// //       </div>
// //     );
// //   }
// //   });
  
// //   var List = React.createClass({
// //     render: function(){
// //       return (
// //         <div>
// //          {this.props.boats.map(function(boat) {
// //            return  
// //         // <Col xs={12} md={5}>       
// //           <BoatCard
// //           className="boatcard"
// //           data-category={boat}
// //             key={boat._id}
// //             boat={boat}
// //             />
         
// //          })
         
// //         }
// //       </div>
// //         )
// //         }
// //         }); 
       

  // export default FilteredBoats;