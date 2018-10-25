import React from "react";
import jump from "../../assets/images/jump.jpeg";
import mockup from "../../assets/images/mockup.png";
// import carousel from "../../assets/images/carousel.png";
import "./About.css";
const About = props => (
<div className="row">
    <img className="col-lg-6 col-md-8 col-xs-12" id="sideImg" src={jump}></img>
            
    <div className="col-lg-6 col-md-3 col-xs-12" id="about-caption">
        <h2>Your outing, your call</h2>
        <p className="overflow-wrap">With Boat Outer, you’re always in control. Once we match you, you'll review crew credentials and boat details before confirming your trip.</p>
        <img id="mockup" src={mockup}/>   
    </div>
</div>
);


export default About;