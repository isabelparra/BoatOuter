import React from "react";


const CaptainCard = props => (
    <div className="card">
        <div className="img-container">
            {/* <img alt={props.name} src={props.image} /> */}
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>captain:</strong> {props.captain.type}
                </li>
                <li>
                    <strong>boatNames:</strong> {props.boatNames.type}
                </li>
                <li>
                    <strong>email:</strong> {props.email.email}
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



export default CaptainCard;