import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Locationcomp.css"
function Locationcomp(props) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={4} xs={5} id="locationcomp1" style={{alignItems:'center', justifyContent:'center', display:'flex'}}>
            <img src={props.locationimg} id="locationcomp3" />
          </Col>

          <Col md={8} xs={7} >
          <Row id="locationcomp2">{props.locationheading} </Row>
          <Row id="locationcomp4">{props.locationdescription}
</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Locationcomp;
