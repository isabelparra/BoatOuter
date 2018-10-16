import React from "react";


const BoatCard = props => (
        <div className="card">
          <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Type:</strong> {props.boat.type}
              </li>
              <li>
                <strong>Date:</strong> {props.boat.date}
              </li>
              <li>
                <strong>Capacity:</strong> {props.boat.capacity}
              </li>
              <li>
                <strong>Activity:</strong> {props.boat.activity}
              </li>
            </ul>
          </div>
          {/* <span onClick={() => props.removeBoat(props.id)} className="remove">𝘅</span> */}
        </div>
      );
      


        // <Container>
        //     <Row>
        //         <Col size="md-4">
        //         <Tab
        //         heading={this.state.result.Date || "Date"}>
        //         {this.state.result.Date ? (
        //             <BoatDetail
        //             date={this.state.result.Date}
        //             src={this.state.result.Image}
        //             passengers={this.state.result.Passengers}
        //             activity={this.state.result.Activity}
        //             />
        //         ) : (
        //             <h3>No results</h3>
        //         )}
        //         </Tab>
        //         </Col>
        //     </Row>
        // </Container>
   


export default BoatCard;