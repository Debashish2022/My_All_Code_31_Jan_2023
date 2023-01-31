import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Subadminhomecomp.css";
export default function Subadminhomecomp(props) {
  return (
    <>
      <Col id="col1">
        <div id="div1">
          <div id="row2">Bid Ends In</div>
          <Row>
            <Col md={3}>
              <div id="day1">33</div>
              <div id="day2">Days</div>
            </Col>
            <Col md={3}>
              <div id="day1">12</div>
              <div id="day2">Hours</div>
            </Col>
            <Col md={3}>
              <div id="day1">20</div>
              <div id="day2">Minutes</div>
            </Col>
            <Col md={3}>
              <div id="day1">59</div>
              <div id="day2">Seconds</div>
            </Col>
          </Row>
        </div>
        <Row id="row3">
          <Col>
            <div id="row4">PROJECT NAME</div>
            <div id="row5">AARKA SPORTS</div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Button size="lg" id="mybtn">
                Details
              </Button>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
