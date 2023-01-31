import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import myimage from "../../assets/Rectangle 6 (1).png";
export default function Home2comp(props) {
  return (
    <>
      <Col md={7} lg={4} sm={12} xs={12}>
        <div id="div1">
          <Container id="con1">
            <Row>
              <Image src={props.image} id="bid" />
            </Row>

            <Row>
              <Col md={3} xs={3}>
                <div id="Thirddiv">{props.days}</div>
                <div id="lastdiv">Days</div>
              </Col>
              <Col md={3} xs={3}>
                <div id="Thirddiv">12</div>
                <div id="lastdiv">Hours</div>
              </Col>
              <Col md={3} xs={3}>
                <div id="Thirddiv">20</div>
                <div id="lastdiv">Minute</div>
              </Col>
              <Col md={3} xs={3} id="coulmn">
                <div id="Thirddiv">59</div>
                <div id="lastdiv">Second</div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <div id="div3">AARKA SPORTS</div>
              </Col>
              <div id="div4">Current bid:45,545</div>
              <Button id="btn">Details</Button>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={1}></Col>

              <Col md={1}></Col>
            </Row>
          </Container>
        </div>
      </Col>
    </>
  );
}
