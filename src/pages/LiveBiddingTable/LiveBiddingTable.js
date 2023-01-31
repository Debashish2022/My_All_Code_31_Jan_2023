import React from "react";
import {
  Button,
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
import "./LiveBiddingTable.css";
import logo from "../../assets/lexone-logo-1-removebg 1.png";
import LiveBiddingTablecomp from "../../components/LiveBiddingTable/LiveBiddingTablecomp";
export default function LiveBiddingTable() {
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
                          All Projectdeba
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
        </Row>
      </Container>
      <Container id="con1">
        <Container>
          <Row>
            <Col md={4} xs={4} id="col1">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col md={4} xs={4} id="col1">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Form>
            </Col>
            <Col md={3} xs={3} id="col2">
              <Button id="btn" size="lg">
                ADD
              </Button>
            </Col>
          </Row>
        </Container>
        <Container id="con2">
          <Row>
            <Col md={8}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasictext">
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container id="con6">
        <Table id="con7">
          <thead>
            <tr id="con3">
              <th>SL NO.</th>
              <th>Email</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            <LiveBiddingTablecomp />
            <LiveBiddingTablecomp />
            <LiveBiddingTablecomp />
            <LiveBiddingTablecomp />
            <LiveBiddingTablecomp />
            <LiveBiddingTablecomp />
          </tbody>
        </Table>
      </Container>
    </>
  );
}
