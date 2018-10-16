import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import API from "../../utils/API";

class Detail extends Component {
  state =  {
  boats: {}
};

// componentDidMount() {
//   API.getBoats(this.props.match.params.id)
//   .then(res => this.setState({ boat: res.data}))
//   .catch(err => console.log(err));
// }

render() {
  return (
    <Container fluid>
   <Row>
     <Col>
     <div>
     <h1>Trips Available</h1>
    <h1> {this.state.boats.date} by {this.state.boats.passengers}
    </h1>
  </div>
     </Col>
   </Row>
   <Row>
     <Col>
     <article>
       <h1>Description</h1>
       <p>{this.state.boats.activity}</p>
     </article>
     </Col>
   </Row>
   <Row>
     <Col>
     <Link to="/">← Back to Search</Link>
     </Col>
   </Row>
   </Container>
  );
}
}
  


export default Detail;
