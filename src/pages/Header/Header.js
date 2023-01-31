import React from "react";
import "./Header.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import { Col, Container, Image, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Header() {
    const[deba,setDeba]=useState("home")
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
                        Lexone
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-start flex-grow-1 pe-3 ms-3">
                      <Nav.Link href="#" id="header1" style={deba === 'home' ? {borderBottom:'6px solid #e47013',borderRadius:'7px'} : null}>
                  <Link id="" to="/home" style={deba === 'home'  ? {color:'red'} : null} onClick={()=>setDeba('home')}
                  >
                    Home
                  </Link>
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
    </>
  );
}

export default Header;
