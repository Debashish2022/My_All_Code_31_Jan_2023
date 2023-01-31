import React from "react";
import { Col, Row } from "react-bootstrap";
import './SubAdminComp.css';

export default function SubAdminComp(props) {
  return (
    <>
      <div className="maindiv" id="div1">
        <Row>
          <Col id="div2">{props.companyName}</Col>
          <Col id="color">
            <div> Bid Start Price</div>

            <div id="style">{props.bidStartPrice}</div>
          </Col>
          <Col id="color">
            Bid Exit Price
            <br />
            <div id="style">{props.bidExitPrice}</div>
          </Col>
          <Col md={3} id="color">
            Bid Status
            <br />
            <div id="grey">{props.bidstatus}</div>
          </Col>
          <Col id="color">
            Exit Price
            <br />
            <div id="style">{props.Exitprice}</div>
          </Col>
        </Row>
      </div>

      
    </>
  );
}
