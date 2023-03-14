import React from "react";
import Header2 from "../../components/Header2/Header2";
import { Container, Row, Col } from "react-bootstrap";
import './CourseDetailsNewPage.css';

export default function CourseDetailsNewPage() {
  return (
    <>
      <Header2 />
      <Container fluid style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <Row
          style={{
            backgroundColor: "#002333",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Col style={{ padding: "0px" }}>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <div id="coursedetails1">MERN Stack Course 2023 - MongoDB, Express, React and NodeJs</div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>{/* <Cards /> */}</Col>
        </Row>
      </Container>
    </>
  );
}
