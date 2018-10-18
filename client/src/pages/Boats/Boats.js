import React, { Component } from "react";

import { withRouter } from 'react-router-dom'
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import BoatCard from "../../components/BoatCard";
import { Container } from "../../components/Grid";
import API from "../../utils/API";

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
      <Container>
        <h1>Boats Available</h1>
        {this.state.boats.map(boat => (
          <BoatCard
            // id={boat.id}
            key={boat._id}
            // type={boat.type}
            // activity={boat.activity}
            // capacity={boat.capacity} 
            boat={boat}
            />
          // <div>
          //   This is boat with activity {boat.activity}
          // </div>
        ))}
      </Container>
    );
  }
}



export default withRouter(Boats);
