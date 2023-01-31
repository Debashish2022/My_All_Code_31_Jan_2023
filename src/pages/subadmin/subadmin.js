import React from "react";
import "./subadmin.css";
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
import SubAdminComp from "../../components/SubAdminComp/SubAdminComp";
export default function Subadmin() {
  return (
    <>
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
                        <Nav.Link href="#action2" id="navbar">
                          Sub Admin
                        </Nav.Link>
                        <Nav.Link href="#action2" id="navbar">
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
      <div>
        <Row>
        <Col md={1}></Col>
          <Col md={3}>
          {/* <div id="name">Rudra Narayan Dash</div> */}
          </Col>
          <Col md={4}></Col>
          <Col md={4}></Col>
        </Row>
      </div>
      </Container>


      <Container >
        <Row>
          <Col>
            <div className="firstdiv">

            <SubAdminComp companyName="Codekart" bidStartPrice="23000" bidExitPrice="2500" bidstatus="2800" Exitprice="3000"/>
            
            <SubAdminComp companyName="Codekart" bidStartPrice="23000" bidExitPrice="2500" bidstatus="2800" Exitprice="3000"/>

            <SubAdminComp companyName="Codekart" bidStartPrice="23000" bidExitPrice="2500" bidstatus="2800" Exitprice="3000"/>

            <SubAdminComp companyName="Codekart" bidStartPrice="23000" bidExitPrice="2500" bidstatus="2800" Exitprice="3000"/>

           
              
              {/* <div className="maindiv" id="div1">
                <Row>
                  <Col id="div2">Arka Sports</Col>
                  <Col id="color">
                   <div> Bid Start Price</div>
                    
                    <div id="style">25,66577</div>
                  </Col>
                  <Col id="color">
                    Bid Exit Price
                    <br />
                    <div id="style">25,66577</div>
                  </Col>
                  <Col md={3} id="color">
                    Bid Status
                    <br />
                    <div id="grey">Not A Winner</div>
                  </Col>
                  <Col id="color">
                    Exit Price
                    <br />
                    <div id="style">25,66577</div>
                  </Col>
                </Row>
              </div>
               <div className="maindiv" id="div1">
                <Row>
                  <Col id="div2">Arka Sports</Col>
                  <Col id="color">
                   <div> Bid Start Price</div>
                    
                    <div id="style">25,66577</div>
                  </Col>
                  <Col id="color">
                    Bid Exit Price
                    <br />
                    <div id="style">25,66577</div>
                  </Col>
                  <Col md={3} id="color">
                    Bid Status
                    <br />
                    <div id="grey">Not A Winner</div>
                  </Col>
                  <Col id="color">
                    Exit Price
                    <br />
                    <div id="style">25,66577</div>
                  </Col>
                </Row>
              </div>
              
              <div className="maindiv" id="div1">
                <Row>
                  <Col id="div2">Arka Sports</Col>
                  <Col id="color">
                   <div> Bid Start Price</div>
                    
                    <div id="style">25,66577</div>
                  </Col>
                  <Col id="color">
                    Bid Exit Price
                    
                    <div id="style">25,66577</div>
                  </Col>
                  <Col md={3} id="color">
                    Bid Status
                    <br />
                    <div id="grey">Not A Winner</div>
                  </Col>
                  <Col id="color">
                    Exit Price
                    <br />
                    <div id="style">25,66577</div>
                  </Col>
                </Row>
              </div> */}
                          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
