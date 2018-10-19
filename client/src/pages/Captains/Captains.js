import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CaptainCard from "../../components/captainCard";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Captains extends Component {
  state =  {
    search: "", 
    captain: []
  };

componentDidMount() {
  API.getCaptains()
  .then(res => {
    console.log(res);
    this.setState ({ captains: res.data });
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
      <Container>
        <h1>Captains</h1>
        {this.state.captains.map(captain => (
          <CaptainCard
            // id={boat.id}
            key={captain._id}
            // type={boat.type}
            // activity={boat.activity}
            // capacity={boat.capacity} 
            captain={captain}
            />
          // <div>
          //   This is boat with activity {boat.activity}
          // </div>
        ))}
      </Container>
    );
  }
}



export default withRouter(Captains);
