import React from "react";
import "./Home.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Navbar,
} from "react-bootstrap";
import deba from "../../assets/image 2.png";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import Nav from "react-bootstrap/Nav";
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Deba from "../Modal/Modal";

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="maindiv">
      <Container fluid>
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
                          All Project
                        </Nav.Link>
                        <Nav.Link href="#action3" id="navbar">
                          Sub Admin
                        </Nav.Link>
                        <Nav.Link href="#action4" id="navbar">
                          Live Bidding
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
          <Col md={4}>
            <h3 id="home">Login</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label id="para">User Name Or Email Address*</Form.Label>
                <Form.Control
                  id="para"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label id="para">Password*</Form.Label>
                <Form.Control
                  id="para"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn"
                id="home2"
                onClick={() => setModalShow(true)}
              >
                Login
              </Button>

              <Deba show={modalShow} onHide={() => setModalShow(false)} />
              <p className="password" id="para">
                Lost Your Password?
              </p>
            </Form>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <h3 id="home">Register</h3>
            <Form>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para">User Name Or Email Address*</Form.Label>
                <Form.Control
                  id="para"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label id="para">Password*</Form.Label>
                <Form.Control
                  id="para"
                  type="password"
                  placeholder="Enter Your Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para"> Confirm Password*</Form.Label>
                <Form.Control
                  id="para"
                  type="password"
                  placeholder=" Enter your Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para">PAN*</Form.Label>
                <Form.Control
                  id="para"
                  type="number"
                  placeholder="Enter your PAN Number"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para">Company Name*</Form.Label>
                <Form.Control
                  id="para"
                  type="text"
                  placeholder=" Enter your Company Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para">Designation*</Form.Label>
                <Form.Control
                  id="para"
                  type="text"
                  placeholder=" Enter your Designation"
                />
              </Form.Group>
              <Form.Group className="mb-3" id="para">
                <Form.Label id="para">DOB*</Form.Label>
                <Form.Control
                  id="para"
                  type="text"
                  placeholder="Enter Your Date Of Birth"
                />
              </Form.Group>
              <p id="para">
                Your Personal Data will be used to support your experience
                through out this website ,to manege access to your account,and
                for other pursoses describe in our Privacy Policy.
              </p>
              <Button type="submit" className="btn" id="home2">
                Register
              </Button>
            </Form>
          </Col>
          <Col></Col>
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
              {/* <RxTwitterLogo/> */}
              <p id="style">Privacy policy</p>
            </Col>
          </Row>
        </div>
        <p id="codekart">
          Copyright 2023 Lexone Solutions |Designed by Codekart Solutions
          Pvt.Ltd.
        </p>
      </Container>
    </div>
  );
}
