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
import "./About.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import deba from "../../assets/image 2.png";
import first from "../../assets/image 3.png";
// import myimage from "../../assets/01.png";
// import myimage2 from "../../assets/02.png";
// import myimage3 from "../../assets/03.png";
// import myimage4 from "../../assets/04.png";
// import myimage5 from "../../assets/05.png";
// import myimage6 from "../../assets/06.png";
import Aboutcomp from "../../components/Aboutcomp/Aboutcomp";
export default function About() {
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
                        <Nav.Link href="#action1" id="navbar1" className="ms-3">
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
                        <Nav.Link href="#action6" id="navbar3" className="ms-3">
                          SIGNUP/LOGIN
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
        <Row>
          <Col md={6} sm={12} xs={12}>
            <Image src={first} id="fimage" />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <Row id="col2">WHO WE ARE!</Row>
            <Row id="myrow">We Work for Your Incredible Success</Row>
            <Row id="myrow2">
              But getting your own aution site up and running has always
              required learning complex coding languages oe hiring an expensive
              design firm for thousands of dollars and months of work.
            </Row>
            <Button id="mybtn">Contact Us</Button>
          </Col>
        </Row>
      </Container>
      <div id="div1">Why Choose Us</div>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col>
            <div id="mydiv">
              Explore in the world's best & largest Bidding Marketplace with our
              beautiful Bidding Products.We want to be a part of your
              smile,success and future growth.
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Aboutcomp   color="#mydiv4" text="Best in Service " number="01" />
          <Aboutcomp  text="Fastest Bid Response"number="02"/>
          <Aboutcomp color="#mydiv4" text="Perfect Project Value"number="03"/>
          <Aboutcomp  text="User friendly interface"number="04"/>
          <Aboutcomp  color="#mydiv4"text="Market comparision"number="05"/>
          <Aboutcomp  text="Strong discussion"number="06"/>
        </Row>
      </Container>
    </>
  );
}