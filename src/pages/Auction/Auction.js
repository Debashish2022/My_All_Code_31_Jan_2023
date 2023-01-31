import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import "./Auction.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import deba from "../../assets/image 2.png";
import { Link } from "react-router-dom";
export default function Auction() {

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
      <Container id="cont">
        <Row>
          <Col md={1}></Col>
          <Col md={2} id="col1">
            Dashboard
          </Col>
          <Col md={2} id="col2">
            Active Auctions
          </Col>
          <Col md={2} id="col3">
            My Auctions
          </Col>
          <Col md={2} id="col4">
            Finalised Projects
          </Col>
          <Col md={2} id="col5">
            Open Auctions
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Container></Container>
    </>
  );
}
