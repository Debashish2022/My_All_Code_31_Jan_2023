import React from "react";
import "./Web.css";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import deba from "../../assets/image 2.png";
import myimage from "../../assets/Rectangle 6 (1).png";
export default function Web() {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col md={12}>
            {["lg"].map((expand) => (
              <Navbar key={expand} expand={expand} className="mb-3">
                <Container fluid>
                  <Image src={logo} id="mylogo"></Image>
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
                      <Nav className="justify-content-start flex-grow-1 pe-3">
                        <Nav.Link href="#action1" id="navbar">
                          Home
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar">
                          About
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar">
                          Project Bids
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar">
                          Contact Us
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar">
                          Profile
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Image src={deba} id="mainimage" />
        </Row>
      </Container>
      <Container>
      <div>
        <Row>
        
         
         <Col md={3}>
          <Image src={myimage} id="bid" />
          </Col>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
          <Col md={3}>
          <Image src={myimage} id="bid" />
          
          </Col>
         
          <Col md={3}>
          <Image src={myimage} id="bid" />
         
          </Col>
         
        </Row>
        </div>
      </Container>
    </div>
  );
}
