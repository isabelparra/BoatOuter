import React from "react";
// import carousel from "../../assets/images/carousel.png";
import customer from "../../assets/images/customer.png";
import "./Reviews.css";
// import { Container} from "../../components/Grid";
import { Col, Row, Carousel, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const Reviews = props => (
    <div id="reviews">
        <img id="reviewsImg" src={customer}></img>
            <p>"Our captain was professional, friendly, instructive, and provided great communication. Overall tremendous experience from planning - takeoff - disembark.
        Kurt R.</p>
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

export default Reviews;