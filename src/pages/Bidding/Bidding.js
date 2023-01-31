import React from "react";
import "./Bidding.css";
import {
  Col,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  Offcanvas,
  Row,
  Table,
} from "react-bootstrap";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
export default function Bidding() {
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
                      <Nav className="justify-content-start flex-grow-1 pe-3 ms-3" >
                        <Nav.Link href="#action1" id="navbar"  className="ms-3">
                          Home
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar"  className="ms-3">
                          Live Bidding
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar"  className="ms-3">
                          My Project
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar"  className="ms-3">
                          Bid Dashboard
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
        <Container>
          <Row>
            <Col md={4} id="firstdiv">
              Project Name
              <h3>AARKA SPORTS</h3>
            </Col>
            <Col md={1}></Col>
            <Col md={4} id="Seconddiv">
              <Row id="bids">BIDS ENDS In</Row>
              <Row>
                <Col md={3} xs={3}>
                  <div id="Thirddiv">33</div>
                  <div id="lastdiv">Days</div>
                </Col>
                <Col md={3} xs={3}>
                  <div id="Thirddiv">12</div>
                  <div id="lastdiv">Hours</div>
                </Col>
                <Col md={3} xs={3}>
                  <div id="Thirddiv">20</div>
                  <div id="lastdiv">Minute</div>
                </Col>
                <Col md={3} xs={3} id="coulmn">
                  <div id="Thirddiv">59</div>
                  <div id="lastdiv">Second</div>
                </Col>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
      <Container id="bid3">
        <div>
          <Row>
            <Col md={1}>
              <div id="bid2">$</div>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-4">
                <Form.Control
                  id="para"
                  type="number"
                  placeholder="Enter Your Price"
                />
              </Form.Group>
            </Col>
            <Col mb={4}>
              <div id="bid4">ENTER</div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Container id="con1">
          <Table id="con2">
            <thead>
              <tr id="con3">
                <th>Name</th>
                <th>Starting Price</th>
                <th>Increased Price</th>
                <th>Current Price</th>
                <th>Exit Price</th>
                <th>Finallised Price</th>
              </tr>
            </thead>
            <tbody>
              <tr id="con4">
                <td>Debashish Jena</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td id="con5">2500$</td>
              </tr>
              <tr id="con4">
                <td>Debashish Jena</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
              </tr>
              <tr id="con4">
                <td>Debashish Jena</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
              </tr>
              <tr id="con4">
                <td>Debashish Jena</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
              </tr>
              <tr id="con4">
                <td>Debashish Jena</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
                <td>2500$</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
      <Container>
      <Container>
        <Row>
          <Col id="lastcon">Bid Winner:Codekart Solution Pvt.Ltd</Col>
        </Row>
      </Container>
      </Container>
    </>
  );
}
