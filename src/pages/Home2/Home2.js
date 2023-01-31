import React from "react";
import "./Home2.css";
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
import deba from "../../assets/image 1.png";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import myimage from "../../assets/Rectangle 6 (1).png";
import image2 from "../../assets/Rectangle 7.png";
import Home2comp from "../../components/Home2/Home2comp";
export default function Home2() {
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
          <Col></Col>
          <Col md={4} id="col2">
            LIVE AUCTION
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="col3">
            Explore on the world's best & largest Bidding marketplace with our
            beautiful Bidding tech product.We want to be a part of your
            smile,success and future growth.
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Home2comp days="20" image={myimage} id="bid" />
          <Home2comp days="20" image={image2} id="bid" />
          <Home2comp days="20" image={myimage} id="bid" />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={5}></Col>
          <Col md={2}>
            <Button id="col4">SHOW MORE</Button>
          </Col>
          <Col md={5}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col></Col>
          <Col md={4} id="col2">
            MY PROJECTS
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Home2comp days="20" image={myimage} id="bid" />
        </Row>
      </Container>
      <Container fluid className="footer">
        <div className="myfooter">
          <Row>
            <Col md={3} id="mylogo">
              <Image src={logo} id="mylogo2"></Image>
              <p id="home7">LEXONE SOLUTIONS</p>
            </Col>
            <Col md={3}>
              <h5 id="style">FAQ & HELP</h5>
              <p id="style">FAQ</p>
              <p id="style">Career</p>
              <p id="style">Terms & Conditions</p>
            </Col>
            <Col md={3}>
              <h5 id="style">ADDRESS</h5>
              <p id="style">
                Kanan vihar,phase-II lane-1,First Floor,Bhubaneswar,Odisha
                <br />
                +91 4567834567
                <br />
                +91 9765545677
              </p>
            </Col>
            <Col md={3}>
              <p id="style">Privacy policy</p>
            </Col>
          </Row>
        </div>
        <p id="codekart">
          Copyright 2023 Lexone Solutions |Designed by Codekart Solutions
          Pvt.Ltd.
        </p>
      </Container>
    </>
  );
}
