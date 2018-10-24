import React from "react";
import "./SearchResults.css";
import { Grid, Row, Col } from "react-bootstrap";
import BoatCard from "../../components/BoatCard";
const SearchResults = props => (
  // <ul className="list-group search-results">
  //   {props.results.map(result => (
  //     <li key={result} className="list-group-item">
  //       <img alt="Dog" src={result} className="img-fluid" />
  //     </li>
  //   ))}
  // </ul>

      <Grid className="container-fluid">
        <Row className="show-grid">
  
  {props.results.map(boat => (   
   <Col xs={12} md={5}>       
      <BoatCard
      key={boat._id}
      boat={boat}
      />  
     </Col>
  ))}
     </Row>
     </Grid>

    )


 
    

export default SearchResults;
