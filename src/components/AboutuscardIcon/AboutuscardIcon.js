import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CountUp from "react-countup";
import "./AboutuscardIcon.css";
function AboutuscardIcon(props) {
  return (
    <Container>
      <Row id="abtuscardicon1">
        {/* <Col id="abtuscardicon1" className={props.class}>
          <div className="{props.iconsName}">{props.iconName}</div>
          <div>
            <div><CountUp start={0} end={props.number} enableScrollSpy={true} /></div>
            <div>{props.title}</div>
          </div>
        </Col> */}
        <Col lg={1} ></Col>
        <Col lg={3} md={12} sm={4} id="iconsName">
          {props.iconName}
        </Col>
        <Col lg={7} md={12} style={{marginTop: '0.5rem'}} >
            <div id="countNum">
              <CountUp start={0} end={props.number} enableScrollSpy={true} />
            </div>
            <div id="icontitle">{props.title}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutuscardIcon;
