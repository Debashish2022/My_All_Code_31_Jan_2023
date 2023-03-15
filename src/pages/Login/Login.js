import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.css";
import key from "../../assets/images/Key.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
function Login() {
  return (
    <>
      <Container fluid id="root">
        <Row>
          <Col md="8" xs="0" lg="8" sm="0" id="login1">
            <img src={key} />

            <Row>
              <Col id="login3">
                WELCOME TO <span style={{ color: "#FEA900" }}>INVOICE</span>
              </Col>
            </Row>
            <Row id="login4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </Row>
          </Col>
          <Col md="4" xs="0" lg="4" sm="0" id="login2">
            <Row id="login5"> INVOICE </Row>
            <Row id="login6"> Login </Row>
            <Row id="login7">
              {" "}
              <InputGroup>
                <span id="login8">
                  {" "}
                  <HiOutlineMail />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="login9"
                    type="email"
                    placeholder="Enter email address"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="login7">
              {" "}
              <InputGroup>
                <span id="login8">
                  {" "}
                  <BsKey />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="login9"
                    type="password"
                    placeholder="Enter password"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="login10">Forgot your pasword ?</Row>
            <Row style={{ width: "100%" }}>
              {" "}
              <Col>
                <Button
                  id="login11"
                  style={{ width: "66%" }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>{" "}
              </Col>
            </Row>
            <Row id="login12">Don’t have a account !</Row>
            <Row id="login10"> Signup</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
