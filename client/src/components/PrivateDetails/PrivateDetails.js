import React from "react";
// import carousel from "../../assets/images/carousel.png";
import { Grid, Col, Row } from "react-bootstrap";
// import "./PrivateDetails.css";
import "../SharedDetails/SharedDetails.css"
import icon from "../../assets/images/icon.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import sail from "../../assets/images/sail.png";
// import { Container } from "../../components/Grid";
import About from "../About";
import Captains from "../Captains";
import Reviews from "../Reviews";
import Safety from "../Safety";
import jump from "../../assets/images/jump.jpeg";
const PrivateDetails = props => (
<div id="details" className="row">
    <div className="col-6">
        <img id="detailsImg" src={sail}/>     
    </div>
        <div className="col-6" id="details">
            <div className="row">

                <h1 className="title">PRIVATE</h1>  
                <h4>Boat on your terms</h4>
                <p>Charter your own private boat.</p>  
                <br></br>
                <div className="row">
                    <div className="detailsCol col-lg-2 col-md-2 col-sm-4">
                        <img id="detailsIcon" src={icon}/>
                        <p>Know your price</p>
                        <p></p>
                    </div>
               
                    <div className="detailsCol col-lg-2 col-md-2 col-sm-4">
                        <img id="detailsIcon" src={icon3}/>
                            <p>Book Instantly</p>
                            <p></p>
                    </div>
   
                    <div className="detailsCol col-lg-2 col-md-2 col-sm-4">
                        <img id="detailsIcon" src={icon4}/>
                            <p>Pay Less Guaranteed</p>
                            <p></p>
                    </div>
                </div>
            </div> 
        </div>
        <div className="row" id="reviews">
        <Reviews></Reviews>
    </div>
    {/* <div className="row" id="main-about">
         <About></About>
    </div> */}
       
    <div className="row" id="safety-header">
<Safety></Safety>
            </div>
              
            <div className="row">
<Captains></Captains>
            </div>
         
  
  
</div>
);



export default PrivateDetails;