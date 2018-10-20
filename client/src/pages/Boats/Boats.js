import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BoatCard from "../../components/BoatCard";
// import { Container } from "../../components/Grid";
// import { gridInstance } from "../../components/gridInstance";
import API from "../../utils/API";
import { Grid, Row, Col } from "react-bootstrap";

class Boats extends Component {
  state =  {
    search: "", 
    boats: []
  };

componentDidMount() {
  API.getBoats()
  .then(res => {
    console.log(res);
    this.setState ({ boats: res.data });
  });
}

handleInputChange = event => {
  const { name, value } = event.target;
    this.setState({
      [name]: value
    });
};

// componentDidMount() {
//   API.getBoats(this.props.match.params.id)
//   .then(res => this.setState({ boat: res.data}))
//   .catch(err => console.log(err));
// }

  render() {
    return (
      
      
      
    //   <gridInstance>
    //    boat
    // </gridInstance>
    <Grid className="container-fluid">
    <Row className="show-grid">
      {this.state.boats.map(boat => ( 
        <Col xs={12} md={5}>       
          <BoatCard
            key={boat._id}
            boat={boat}
            />
          </Col>
        ))}     
    </Row>
</Grid>

      
    );
  }
}



export default withRouter(Boats);
