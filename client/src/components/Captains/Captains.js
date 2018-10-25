import React from "react";
// import carousel from "../../assets/images/carousel.png";
import customer from "../../assets/images/customer.png";
import "./Captains.css";
import captain from "../../assets/images/captain.jpeg"
// import { Container} from "../../components/Grid";
import { Col, Row, Carousel, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const Captains = props => (
  <div id="captains">
    <div className="col-md-6 captainsDiv">
      <h2 className="title text-center">BOAT OUTER</h2>
      <h3 className="text-center">Meet the Crew</h3>
      <h3 className="text-center">Are you a captain?</h3>
      <button id="applyBttn">Apply</button>
    </div>
      <div className="col-md-6">
        <img id="captainImg" src={captain}/>  
      </div>
  </div>
   

/* <Carousel id="reviewsCarousel">
<Carousel.Item className="carouselItem">
<img id="reviewsImg" src={customer}></img>
  <Carousel.Caption className="caption">
  <p>"Our captain was professional, friendly, instructive, and provided great communication. Overall tremendous experience from planning - takeoff - disembark.
        Kurt R.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item className="carouselItem">
<img id="reviewsImg" src={customer}></img>
  <Carousel.Caption className="caption">

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item className="carouselItem">
<img id="reviewsImg" src={customer}></img>
  <Carousel.Caption className="caption">


  </Carousel.Caption>
</Carousel.Item>
</Carousel>   */


);

export default Captains;