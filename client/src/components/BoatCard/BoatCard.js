import React from "react";
import "./BoatCard.css";
// import { Container, Row, Col } from "../Grid";


const BoatCard = props => (
  <div className="card">
  {/* <div id="img"> */}
      <img id="boatImg" alt="Boat Images" src={props.boat.image || "" } />     
      <br></br>
      {/* </div> */}
        <h3><strong className="listing_name">{props.boat.listing_name}</strong></h3>
          <div id="details">
              {props.boat.boatSize} || 1 - {props.boat.passengers} Passengers || {props.boat.activity}
          </div>
            
    </div>  
  
   );

  // <div>
  //   <PhotoGrid columns={3} photos={props.boat.image}
  // </div>
  // document.getElementById()
      

export default BoatCard;