import React, {Component} from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";

/* Import Components */

import RadioGroup from "../../components/RadioGroup";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";
import BoatCard from "../../components/BoatCard";
import SharedDetails from "../../components/SharedDetails";
import PrivateDetails from "../../components/PrivateDetails";
// import Reviews from "../../components/Reviews";
import { Col, Row, Carousel, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from "../../components/Container";
import shareIcon from "../../assets/images/shareIcon.png";
import carousel1 from "../../assets/images/carousel1.png";
import carousel4 from "../../assets/images/carousel4.png";
import carousel3 from "../../assets/images/carousel3.png";
import carousel5 from "../../assets/images/carousel5.png";
import "./Home.css";

class Home extends Component {
  state = {
      boats: [], 
      package: "",
      date: "",
      passengers: "",
      activity: ""
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleSharedClicked = () => {
    this.setState({
      package: 'Shared' 
    });
    console.log("Shared Packaged");
  };

  handlePrivateClicked = () => {
    this.setState({
      package: 'Private'
    }); 
    console.log("Private Packaged");
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    // debugger;
    if (this.state.package || this.state.date || this.state.passengers) {
    this.props.history.push('/boats', {
      pathname: '/boats',
      state:
      { 
        package: this.state.package,
        date: this.state.date,
        passengers: this.state.passengers,
        activity: this.state.activity
      }
    });
    }
  };

  render() {
    var details;
      if(this.state.package === "Shared"){   
        details = <SharedDetails></SharedDetails>     
      } 
      else {
        details = <PrivateDetails></PrivateDetails>
      }
    return (
      <Container>
        <div className="row">
        {this.renderCarousel()}
        </div>
      
        <div className='row'>
          {/* <div id="sharedTab"> */}
            <button id='shared' onClick={this.handleSharedClicked}>
              <div className="circle">
                <img src={shareIcon} id="icon"></img>
              </div>              
              <h2 id="header">Shared</h2>
              <p id="header">Get paired with other users going your way</p>
            </button>
          {/* </div> */}
          {/* <div id="privateTab"> */}
            <button id='private' onClick={this.handlePrivateClicked}>
              <div className="circle">
                </div>
              <h2 id="header">Private</h2>
              <p id="header">Instantly book a private boat</p>
            </button>
          </div>
      
   
      
          <div className="row">
            <form id="searchForm" onSubmit={this.handleFormSubmit}>
              {/* <div className="">  */}
                <div className="input col-3">
                  <FormControl 
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                    list="dates"
                    type="date"
                    placeholder="Trip Date"
                    id="dateSelect"
                  />
                </div>
              {/* </div> */}
              {/* <div className="">  */}
                <div className="input col-3">         
                  <FormControl componentClass="select"         
                    value={this.state.passengers}
                    onChange={this.handleInputChange}
                    name="passengers"
                    placeholder="Party Size"
                    id="partySize">
                    <option value="Party Size">Party Size</option>
                    <option value="1">1 passenger</option>
                    <option value="2">2 passengers</option>
                    <option value="3">3 passengers</option>
                    <option value="4">4 passengers</option>
                    <option value="5">5 passengers</option>
                    <option value="6">6 passengers</option>
                    <option value="7">7 passengers</option>
                    <option value="8">8 passengers</option>
                    <option value="9">9 passengers</option>
                    <option value="10">10 passengers</option>
                    <option value="11">11 passengers</option>
                    <option value="12">12+ passengers</option>               
                  </FormControl>
                </div>
              {/* </div> */}
              {/* <div className="">  */}
                <div className="input col-3">
                {/* <ControlLabel>Select Activity</ControlLabel> */}
                    <FormControl componentClass="select" placeholder="select"
                      defaultValue={this.state.activity} 
                      onChange={this.handleInputChange} 
                      name='activity'
                      id="activity"
                    >
                    <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Select activity</option>
                    <option value="Cruising">Cruising</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Watersports">Watersports</option> 
                  </FormControl>     
                </div>
              {/* </div> */}
      
              {/* <div className="">  */}
                <button
                  type="submit"
                  id="searchBttn"
                  onClick={this.props.handleFormSubmit}
                >
                  <i className="fas fa-search"></i>
                </button>
              {/* </div> */}
            </form>
          </div>
     
        <Row>
          <Col>
        <div id="packageDetails">
          {details}
        </div>
        </Col>
         
        </Row>
     </Container>
    )
  }
  
  renderCarousel = () => {
    return (
      <Carousel id="carousel">
        <Carousel.Item className="carouselItem">
          <img className="CarImg" src={carousel1}/>
          <Carousel.Caption className="caption">
            <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
        <img className="CarImg" src={carousel5}/>
          <Carousel.Caption className="caption">
          <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img className="CarImg" src={carousel3}/>
          <Carousel.Caption className="caption">
          <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>  
    );
  }
}
  // const buttonStyle = {
  //   margin: "10px 10px 10px 10px"
  // };


export default withRouter(Home);