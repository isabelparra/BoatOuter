import React from "react";
import "./SearchResults.css";
import { Container, Col } from "../../components/Grid";
import BoatCard from "../../components/BoatCard";
const SearchResults = props => (
  // <ul className="list-group search-results">
  //   {props.results.map(result => (
  //     <li key={result} className="list-group-item">
  //       <img alt="Dog" src={result} className="img-fluid" />
  //     </li>
  //   ))}
  // </ul>
  <div className="list-group">
  {props.results.map(result => (   
   <Col xs={12} md={5}>       
      <BoatCard
      key={result}
      src={result}
      />  
     </Col>

    ))}
    </div>
   
);

export default SearchResults;
