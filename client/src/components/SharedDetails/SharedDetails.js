import React from "react";
import carousel from "../../assets/images/carousel.png";
import { Col, Row } from "react-bootstrap";
import "./SharedDetails.css";
import icon from "../../assets/images/icon.svg";

const SharedDetails = props => (


    <Row>
        {/* <Col md={6} mdPush={6}> */}
        <img id="detailsImg" width={400} height={400} alt="900x500"src={carousel}/>
        {/* </Col>
        <Col md={6} mdPull={6}> */}
        <div>
            <h1>SHARE</h1>  
            <h4>Ride along with a private captain and certified users</h4>
            <p>Choose your preference. We'll do the rest.</p>           
                <Col md={3}>
                <div>
                    <img id="detailsIcon" src={icon}/>
                    <p>Enjoy a boat day for as little as $50</p>
                    <p>Split the cost with users</p>
                </div>
                </Col>
                <Col md={3}>
                <div>
                    <p>Enjoy a boat day for as little as $50</p>
                    <p>Split the cost with users</p>
                </div>
                </Col>
                <Col md={3}>
                <div>
                    <p></p>
                    <p>Split the cost with users</p>
                </div>
                </Col>
                </div>
    {/* </Col> */}

</Row>

);

export default SharedDetails;
