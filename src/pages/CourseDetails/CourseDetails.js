import React from "react";
import Cards from "../../components/CourseCard/CourseCards";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// import Button from "../../components/Header/Button";

import "./Coursedetail.css";
import Header2 from "../../components/Header2/Header2";
import AddCourseModal from "../../components/AddCourseModal/AddCourseModal";
function CourseDetails() {
  const [modalShow, setModalShow] = React.useState(false);
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
          {/* <Col md={1}></Col> */}
          <Col style={{ padding: "0px" }}>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center'
              }}>
                  <div id="courses1">Total Courses(14)</div>
                  <Button
                    id="addcoursebutton"
                    onClick={() => setModalShow(true)}
                  >
                    Add Course
                  </Button>
                  <AddCourseModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
          {/* <Col md={1}></Col> */}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CourseDetails;
