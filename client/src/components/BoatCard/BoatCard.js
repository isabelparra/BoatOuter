import React from "react";


const BoatCard = props => (
        <div className="card">
          <div className="image"
          role="img"
          aria-label="Boat Image"
          style={{
            backgroundImage: `url(${props.boat.imgsrc})`
          }}>
            {/* <img src={props.boat.image || "https://placehold.it/300x300" } /> */}
            {/* {props.boat.image} */}
          </div>
          <div className="content">
            <ul>
            <li>
                <strong>Listing Name:</strong> {props.boat.listing_name}
              </li>
              <li>
                <strong>Captain Name:</strong> {props.boat.captainname}
              </li>
              <li>
                <strong>Package:</strong> {props.boat.package}
              </li>
              <li>
                <strong>Date:</strong> {props.boat.date}
              </li>
              <li>
                <strong>Passengers:</strong> {props.boat.passengers}
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