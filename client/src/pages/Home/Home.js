import React, {Component} from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { SearchForm } from "../../components/SearchForm";
// import { throws } from "assert";
// import { AsyncParallelBailHook } from "tapable";
import { Input, FormBtn } from "../../components/Form";
import SharedDetails from "../../components/SharedDetails";
import { Carousel } from "react-bootstrap";

// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import boat from "../../assets/images/boat.png";
// import carousel from "../../assets/images/carousel.png";
import preview from "../../assets/images/preview.png";

class Home extends Component {

  state = {
      boats: [], 
      // results: 
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
      package: 'shared' 
    });
    console.log("Shared Packaged");
  };

  handlePrivateClicked = () => {
    this.setState({
      package: 'private'
    });
   
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    // debugger;
    if (this.state.package && this.state.date && this.state.passengers) {
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
   if(this.state.package === "shared"){
     details = <SharedDetails></SharedDetails>
   } else {
     details = <h1>no</h1>
   }
    return (
    
        <Container fluid>
          <Row>
            <Col size="12">
              {this.renderCarousel()}

              {/* {this.onClick("#shared")} */}
                
{/*              
        <video className="video-background" preload="true" muted="true" autoplay="true" loop="true">
          <source src="/Users/isabelparra/Desktop/code/projectsTest/BoatOuter/client/src/pages/Home/A_boat_sailing_on_the_sea.mp4" type="video/mp4" />
        </video>
         */}
          {/* ($"shared").on('click', function()) */}


              <div id='packageContainer'>
                <button id='shared' onClick={this.handleSharedClicked}>
{/*                 
                {this.state.package ? 'Shared' : 'Private'} */}
                Shared</button>
                <button id='private' onClick={this.handlePrivateClicked}>Private</button>
              </div>
              <form id='searchForm' onSubmit={this.handleFormSubmit}>
                <Input
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                  list="dates"
                  type="date"
                  placeholder="Date (required)"
                  id="dateSelect"
                  />
                <Input
                  value={this.state.passengers}
                  onChange={this.handleInputChange}
                  name="passengers"
                  type="integer"
                  placeholder="Passengers (required)"
                  />
                <select 
                  defaultValue={this.state.activity} 
                  onChange={this.handleChange} 
                  name='activity'
                >
                  <option  disabled={this.props.defaultDisabled ? true : null} >{this.props.defaultLabel}Select activity</option>
                  <option value="Cruising">Cruising</option>
                  <option value="Fishing">Fishing</option>
                  <option value="Watersports">Watersports</option>
                </select>
                <FormBtn 
                  type="submit"
                  onClick={this.props.handleFormSubmit}
                  className="btn btn-success"
                >
                  Search
                </FormBtn>
              </form> 
              <div>
                <h1>Details</h1>
                {details}
              </div>
          {/* {this.renderSharedDetails()} */}
              {/* <SharedDetails>
                <h1>Shared</h1>
              </SharedDetails> */}
        
          </Col>
        </Row>
      </Container>
    );
  } 

  renderCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={preview}/>
          <Carousel.Caption>
            <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={preview}/>
          <Carousel.Caption>
          <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={preview}/>
          <Carousel.Caption>
          <h1>Discover the freedom of boating</h1>
            <p>Plan your next water adventure for less</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>    
    );
  }
 

  
   

}

export default withRouter(Home);