import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import lexonelogo from "../../assets/navbar/lexone-logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../../redux/Slice/userSlice";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const user = useSelector((state) => state.user);
  console.log("user is (called in Header page) ", user);
  const UserEmailToShow = user.email;

  const dispatch = useDispatch();

  const logoutFun = () => {
    if (window.confirm("Are You Sure Want To Logout?")) {
      dispatch(clear());
      window.location.reload();
    }
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/"><img
              src={lexonelogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="lexone logo"
            /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" >
                <Link id="header1"  to="/" style={location.pathname === "/" ? {color: '#44c1f2'}: {color: '#0b3ed9'}}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#" >
                <Link id="header1"  to="/aboutus" style={location.pathname === "/aboutus" ? {color: '#44c1f2'}: {color: '#0b3ed9'}}>
                  About
                </Link>
              </Nav.Link>
              <Nav.Link href="#" >
                <Link id="header1"  to="/bids" style={location.pathname === "/bids" ? {color: '#44c1f2'}: {color: '#0b3ed9'}}>
                  Project Bids
                </Link>
              </Nav.Link>
              <Nav.Link href="#" >
                <Link to="/contactus"  id="header1" style={location.pathname === "/contactus" ? {color: '#44c1f2'}: {color: '#0b3ed9'}}>
                  Contact Us
                </Link>
              </Nav.Link>
              <Nav.Link href="#" >
                {user.token ? (
                  <Link id="header1" to="/profile" style={location.pathname === "/profile" ? {color: '#44c1f2'}: {color: '#0b3ed9'}}>
                    Profile
                  </Link>
                ) : null}
              </Nav.Link> 
              <Nav.Link href="#">
                {user.token ? (
                  <Link id="header2" style={{color: '#e47013'}} onClick={() => logoutFun()}>
                    Logout
                  </Link>
                ) : (
                  <Link id="header2" to="/loginregister" style={location.pathname === "/loginregister" ? {color: '#e47013'}: {color: '#0b3ed9'}}>
                    Login / signup
                  </Link>
                )}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" id="emailHeader">
                {user.token ? UserEmailToShow : ""}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
