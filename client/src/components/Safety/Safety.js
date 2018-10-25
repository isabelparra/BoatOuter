import React from "react";
import icon from "../../assets/images/icon.png";
import icon5 from "../../assets/images/icon5.png";
import icon3 from "../../assets/images/icon3.png";
// import icon from "../../assets/images/icon.png";
import icon2 from "../../assets/images/icon2.svg";
import icon7 from "../../assets/images/icon7.png";
import "./Safety.css";
// import carousel from "../../assets/images/carousel.png";

const Safety = props => (
<div className="row">
    <h3 className="title">SAFETY FIRST</h3>
    <p className="overflow-wrap">Your safety is our top priority. Every boat, captain and renter is BoatOuter-approved, which means they’ve passed our safety check.</p>
    <div id="safety-info" className="row">
          <p className="col-lg-2.4 safety-col text-center">
          <img id="detailsIcon" src={icon}/><br></br>
          Experts Only</p>
          <p className="col-lg-2.4 safety-col text-center">
          <img id="detailsIcon" src={icon2}/><br></br>
          Background Check</p>
          <p className="col-lg-2.4 safety-col">
          <img id="detailsIcon" src={icon7}/><br></br>
          Medically Fit</p>
          <p className="col-lg-2.4 safety-col">
          <img id="detailsIcon" src={icon3}/><br></br>
          Local Leaders</p>
          <p className="col-lg-2.4 safety-col text-center">
          <img id="detailsIcon" src={icon5}/><br></br>
          Perfect Boats</p>
    </div>
</div>
);


export default Safety;