import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Aboutuscard.css";
function Aboutuscard(props) {
  return (
    <Container>
      <Row>
        <Col id="abtus1" className={props.class}>
          <div>{props.title}</div>
          <div>{props.number}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutuscard;
