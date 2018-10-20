import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import BoatCard from "../../components/BoatCard";

const gridInstance = (
    <Grid>
        <Row className="show-grid">
            <Col sm={6} md={3}>
                <code>
                &lt;
                {'Col sm={6} md={3}'} /&gt;
                </code>
                
                {this.state.boats.map(boat => ( 
                <BoatCard
                key={boat._id}
                boat={boat}
                />
                ))}     
            </Col>
        </Row>
    </Grid>
    );
         
          
//  render(gridInstance);

 export default gridInstance;