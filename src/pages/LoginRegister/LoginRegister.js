import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./LoginRegister.css";
import LoginComp from "../../components/LoginComp/LoginComp";
import RegisterComp from "../../components/RegisterComp/RegisterComp";
import Header from "../../components/Header/Header";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import Footer from "../../components/Footer/Footer";
import LoginRegBg from "../../assets/login/image2.png";

export default function LoginRegister() {
  return (
    <>
      {/* added headers */}
      <CommonHeader
        pagename="Login / Register"
        linkname="Home / Login / Register"
        img={LoginRegBg}
      />

      <Container fluid style={{ backgroundColor: "#f2f2f2" }}>
        {/* put header here */}

        <Container className="pt-2 pb-1">
          <Row>
            <Col md={5}>
              <LoginComp />
            </Col>
            <Col md={1}></Col>
            <Col md={6}>
              <RegisterComp />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
