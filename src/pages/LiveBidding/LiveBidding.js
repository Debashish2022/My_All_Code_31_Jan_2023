import React from "react";
import "./LiveBidding.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import LiveBiddingcomp from "../../components/LiveBiddingcomp/LiveBiddingcomp";
export default function LiveBidding() {
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
                          Home
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar" className="ms-3">
                          All Project
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar" className="ms-3">
                          Subadmin
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar" className="ms-3">
                          Live Project
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
      <Container>
        <Row>
          <Col id="col1">LIVE BIDDINGS</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={4}><LiveBiddingcomp projectname="road construction" project="project name" bidLastDate="02/11/2023" /></Col>
          <Col md={4}><LiveBiddingcomp bidLastDate="02/11/2023" /></Col>
          <Col md={4}><LiveBiddingcomp bidLastDate="02/11/2023" /></Col>
          <Col md={4}><LiveBiddingcomp bidLastDate="02/11/2023" /></Col>
          <Col md={4}><LiveBiddingcomp bidLastDate="02/11/2023" /></Col>
          <Col md={4}><LiveBiddingcomp bidLastDate="02/11/2023" /></Col>

          
        </Row>
      </Container>
    </>
  );
}