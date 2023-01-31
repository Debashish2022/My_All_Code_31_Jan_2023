import React from 'react';
import "./Contactus.css";
import {
    Col,
    Container,
    Image,
    Nav,
    Navbar,
    Offcanvas,
    Row,
  } from "react-bootstrap";
  import deba from "../../assets/image 2.png";
  import img1 from "../../assets/Ellipse 8.png";
  import logo from "../../assets/lexone-logo-1-removebg 1.png";
export default function Contactus() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col md={12}>
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
                          HOME
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar" className="ms-3">
                          ABOUT
                        </Nav.Link>
                        <Nav.Link href="#action3" id="navbar" className="ms-3">
                          PROJECT BIDS
                        </Nav.Link>
                        <Nav.Link href="#action4" id="navbar" className="ms-3">
                          CONTACT US
                        </Nav.Link>
                        <Nav.Link href="#action5" id="navbar" className="ms-3">
                          PROFILE
                        </Nav.Link>
                        <Nav.Link href="#action6" id="navbar2" className="ms-3">
                          SIGN-UP/LOGIN
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
        <Row id="row1">
            <Col md={3}>
            <Image src={img1} id="image2" />
            <div id="div1">Location</div>
            <div id="div2">168/170,Ave 01,old York</div>
            <div id="div2">Drive Rich Mirpur, Dhaka</div>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
            <Image src={img1} id="image2" />
            <div id="div1">Contact</div>
            <div id="div2">+91 34234 53453</div>
            <div id="div2">+91 342344 2342</div>
            </Col>
            <Col md={1}></Col>
            <Col md={3}>
            <Image src={img1} id="image2" />
            <div id="div1">Email</div>
            <div id="div2">Somnathsahoo860@gmail.com</div>
            <div id="div2">jenadebashish09@gmail.com</div>
            </Col>
        </Row>
      </Container>
    </>
  )
}
