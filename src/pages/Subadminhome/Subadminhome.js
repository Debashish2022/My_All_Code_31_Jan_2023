import React from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import "./Subadminhome.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import Subadminhomecomp from "../../components/Subadminhomecomp/Subadminhomecomp";
export default function Subadminhome() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            {["lg"].map((expand) => (
              <Navbar key={expand} expand={expand} className="mb-3">
                <Container fluid>
                  <Image id="mylogo" src={logo}></Image>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        Lexon
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-start flex-grow-1 pe-3 ms-3">
                        <Nav.Link href="#action1" id="navbar" className="ms-3">
                          Home
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar" className="ms-3">
                          Live Bidding
                        </Nav.Link>
                        <Nav.Link href="#action3" id="navbar" className="ms-3">
                          All Project
                        </Nav.Link>
                        <Nav.Link href="#action4" id="navbar" className="ms-3">
                          Bid Dashboard
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </Col>
        </Row>
        <Row id="row1">HOME</Row>
        <Row>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
          <Col md={4}>
          <Subadminhomecomp/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
