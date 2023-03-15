import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CardImage from "../../assets/bids/cardImg.png";
import "./BidsDetailsPage.css";
function BidsDetailsPage() {
  return (
    <>
      <Container>
        <Row>
          <Col id="bidsdetails1ImgDiv">
            <img src={CardImage} alt="CardImage" id="bidsdetails1" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails2">Project name : `Aarka Sports</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails3">Owner Name : Dinesh Panda</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails3">Company : Codekart</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails4">
              Description : Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="bidsdetails5">Min. Bid Price : 25cr</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Button id="bidsdetails6">Download Requirement sheet</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BidsDetailsPage;
