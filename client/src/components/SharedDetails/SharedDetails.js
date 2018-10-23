import React from "react";
// import carousel from "../../assets/images/carousel.png";
import { Grid, Col, Row } from "react-bootstrap";
import "./SharedDetails.css";
import icon from "../../assets/images/icon.svg";
import sail from "../../assets/images/sail.png";
// import { Container } from "../../components/Grid";
import Reviews from "../Reviews";
const SharedDetails = props => (
    <div id="details">
<Grid id="grid">
    <Row>
    <Col md={6} xs={12}> 
        <img id="detailsImg" src={sail}/>     
    </Col>
        <Col md={6} xs={12}>
            <div>
                <h1>SHARE</h1>  
                <h4>Ride along with a private captain and certified users</h4>
                <p>Choose your preference. We'll do the rest.</p>    
                    <div className="detailsCol">
                        <img id="detailsIcon" src={icon}/>
                        <p>Enjoy a boat day for as little as $50</p>
                        <p>Split the cost with users</p>
                    </div>
              
                <div className="detailsCol">
                <img id="detailsIcon" src={icon}/>
                    <p>Enjoy a boat day for as little as $50</p>
                    <p>Split the cost with users</p>
                </div>
            {/* </Col>
            <Col md={12}>  */}
                <div className="detailsCol">
                <img id="detailsIcon" src={icon}/>
                    <p></p>
                    <p>Split the cost with users</p>
                </div>
            </div>
        </Col> 
    </Row>
    <Row>
         {/* </Col>   
</Row> */}
<Col>
    <div id="reviews">
        <Reviews></Reviews>
    </div>
    </Col>
    </Row>
    <Row>
    <Col>
                <div id="safety">
              <h3>SAFETY FIRST</h3>
              <p>Your safety is our top priority. Every boat, captain and renter is BoatOuter-approved, which means they’ve passed our safety check.</p>
              </div>
              <p>Experts Only</p>
              <p>Background Check</p>
              <p>Medically Fit</p>
              <p>Local Leaders</p>
              <p>Perfect Boats</p>
    
   </Col>
   </Row>
 </Grid>
 </div>
);

export default SharedDetails;
