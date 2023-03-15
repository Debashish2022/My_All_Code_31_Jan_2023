import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { MdOutlineLogout } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Container>
        <div id="home7">
          <div id="home8">INVOICE</div>
          <div id="home10">
            Logout
            <MdOutlineLogout />
          </div>
        </div>

        <Row id="home1">
          <Col lg={2} md={2}></Col>
          <Col sm={12} xs={12} lg={4} md={4}>
            <div id="home4">
              <Row id="home2"> Generate Invoice</Row>
            </div>
          </Col>
          <Col sm={12} xs={12} lg={4} md={4}>
            <div id="home5">
              <Row id="home3">My Invoice</Row>
            </div>
          </Col>
          <Col lg={2} md={2}></Col>
        </Row>
      </Container>
    </>
  );
}
