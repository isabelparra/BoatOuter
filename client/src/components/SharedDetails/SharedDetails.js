import React from "react";
// import carousel from "../../assets/images/carousel.png";
import { Grid, Col, Row } from "react-bootstrap";
import "./SharedDetails.css";
import icon from "../../assets/images/icon.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import sail from "../../assets/images/sail.png";
// import { Container } from "../../components/Grid";
import About from "../About";
import Captains from "../Captains";
import Reviews from "../Reviews";
import Safety from "../Safety";

const SharedDetails = props => (
<div id="details" className="row">
    <div className="col-6">
        <img id="detailsImg" src={sail}/>     
    </div>
        <div className="col-6" id="details">
            <div className="row">
                <h1 className="title">SHARE</h1>  
                <h4>Ride along with a private captain and certified users</h4>
                <p>Choose your preference. We'll do the rest.</p>  
                <br></br>  
                <div className="row">
                    <div className="detailsCol text-center  col-lg-2 col-md-2 col-sm-4">
                        <img id="detailsIcon" src={icon}/>
                        <br></br><br></br>
                        <strong><p>Enjoy a boat day</p></strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
              
                <div className="detailsCol text-center  col-lg-2 col-md-2 col-sm-4">
                <img id="detailsIcon" src={icon3}/>
                <br></br><br></br>
                    <strong><p>Split the cost</p></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    
                </div>

                <div className="detailsCol text-center col-lg-2 col-md-2 col-sm-4">
                <img id="detailsIcon" src={icon4}/>
                <br></br><br></br>
                    <strong><p>Split the cost with users</p></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
            </div>
        </div>
    
    <div className="row" id="reviews">
        <Reviews></Reviews>
    </div>


                <div className="row" id="main-about">
         <About></About>
    </div>
   
       
            <div className="row" id="safety-header">
<Safety></Safety>
            </div>
            <div className="row">
<Captains></Captains>
            </div>
              
      </div>   

);

export default SharedDetails;
