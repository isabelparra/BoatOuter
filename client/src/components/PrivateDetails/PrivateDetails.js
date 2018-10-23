import React from "react";
// import carousel from "../../assets/images/carousel.png";
import { Grid, Col, Row } from "react-bootstrap";
import "./PrivateDetails.css";
import "../SharedDetails/SharedDetails.css"
import icon from "../../assets/images/icon.svg";
import sail from "../../assets/images/sail.png";
// import { Container } from "../../components/Grid";
import Reviews from "../Reviews";
import jump from "../../assets/images/jump.jpeg";
const PrivateDetails = props => (
<div id="details"> 
<Grid id="grid">
    <Row>
        <Col md={6} s={6} xs={12}> 
            <img id="detailsImg" src={sail}/>     
       </Col>

        <Col md={6} xs={12}> 
            <div>
                <h1>PRIVATE</h1>  
                <h4>Boat on your terms</h4>
                <p>Charter your own private boat.</p>  
                {/* <Col> */}
                <div id="detailsColumns">
                    <div className="detailsCol">
                        <img id="detailsIcon" src={icon}/>
                        <p>Know your price</p>
                        <p></p>
                    </div>
                {/* </Col>
                <Col> */}
                    <div className="detailsCol">
                        <img id="detailsIcon" src={icon}/>
                            <p>Book Instantly</p>
                            <p></p>
                    </div>
                    {/* </Col>
                    <Col> */}
                    <div className="detailsCol">
                    <img id="detailsIcon" src={icon}/>
                        <p>Pay Less Guaranteed</p>
                        <p></p>
                    </div>
                </div>
            </div> 
        </Col>
    </Row>

    <Row>
        <Col size="12"> 
        <div id="reviews">
        <Reviews></Reviews>
        </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <div id="main-about">
            <img id="sideImg" src={jump}></img>
            
            <div id="about-caption">
            <h2>Your outing, your call</h2>
            <p>With Boat Outer, you’re always in control. Once we match you, you'll review crew credentials and boat details before confirming your trip.</p>
            </div>
        </div>
        
        </Col>
    </Row>
  
</Grid>  
</div>

);



export default PrivateDetails;