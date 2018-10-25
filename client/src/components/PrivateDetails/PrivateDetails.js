import React from "react";
// import carousel from "../../assets/images/carousel.png";
import { Grid, Col, Row } from "react-bootstrap";
// import "./PrivateDetails.css";
import "../SharedDetails/SharedDetails.css"
import icon from "../../assets/images/icon.svg";
import sail from "../../assets/images/sail.png";
// import { Container } from "../../components/Grid";
import Reviews from "../Reviews";
import jump from "../../assets/images/jump.jpeg";
const PrivateDetails = props => (
<div id="details" className="row">
    <div className="col-6">
        <img id="detailsImg" src={sail}/>     
    </div>
        <div className="col-6" id="details">
            <div className="row">

                <h1>PRIVATE</h1>  
                <h4>Boat on your terms</h4>
                <p>Charter your own private boat.</p>  
                
                <div className="row">
                    <div className="detailsCol col-lg-2 col-m-2 col-sm-4">
                        <img id="detailsIcon" src={icon}/>
                        <p>Know your price</p>
                        <p></p>
                    </div>
               
                    <div className="detailsCol col-lg-2 col-m-2 col-sm-4">
                        <img id="detailsIcon" src={icon}/>
                            <p>Book Instantly</p>
                            <p></p>
                    </div>
   
                    <div className="detailsCol col-lg-2 col-m-2 col-sm-4">
                        <img id="detailsIcon" src={icon}/>
                            <p>Pay Less Guaranteed</p>
                            <p></p>
                    </div>
                </div>
            </div> 
        </div>
        <div className="row" id="reviews">
        <Reviews></Reviews>
    </div>
    <div className="row" id="main-about">
            <img className="col-lg-6 col-md-8 col-xs-12" id="sideImg" src={jump}></img>
            
            <div className="col-lg-6 col-md-3 col-xs-12" id="about-caption">
                <h2>Your outing, your call</h2>
                <p className="overflow-wrap">With Boat Outer, you’re always in control. Once we match you, you'll review crew credentials and boat details before confirming your trip.</p>
            </div>
    </div>
       
            <div className="row" id="safety-header">
              <h3>SAFETY FIRST</h3>
              <p className="overflow-wrap">Your safety is our top priority. Every boat, captain and renter is BoatOuter-approved, which means they’ve passed our safety check.</p>
              <div id="safety-info" className="row">
                    <p className="col safety-col">Experts Only</p>
                    <p className="col safety-col">Background Check</p>
                    <p className="col safety-col">Medically Fit</p>
                    <p className="col safety-col">Local Leaders</p>
                    <p className="col safety-col">Perfect Boats</p>
                </div>
            </div>
              
         
  
  
</div>
);



export default PrivateDetails;