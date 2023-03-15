import React from 'react'
import sign from "../../assets/images/image 4.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Signup.css";
export default function Signup() {
  return (
    <>
            <Container fluid id="root">
        <Row>
          <Col md="8" xs="0" lg="8" sm="0" id="signup1">
            <img src={sign} />

            <Row>
              <Col id="signup3">
                WELCOME TO <span style={{ color: "#FEA900" }}>INVOICE</span>
              </Col>
            </Row>
            <Row id="signup4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </Row>
          </Col>
          <Col md="4" xs="0" lg="4" sm="0" id="signup2">
            <Row id="signup5"> INVOICE </Row>
            <Row id="signup6"> signup </Row>
            <Row id="signup7">
              {" "}
              <InputGroup>
                <span id="signup8">
                  {" "}
                  <BsFillPersonFill />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="signup9"
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="signup7">
              {" "}
              <InputGroup>
                <span id="signup8">
                  {" "}
                  <MdLocalPhone />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="signup9"
                    type="number"
                    placeholder="Phone number"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="signup7">
              {" "}
              <InputGroup>
                <span id="signup8">
                  {" "}
                  <HiOutlineMail />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="signup9"
                    type="email"
                    placeholder="Enter email address"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="signup7">
              {" "}
              <InputGroup>
                <span id="signup8">
                  {" "}
                  <MdLock />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="signup9"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="signup7">
              {" "}
              <InputGroup>
                <span id="signup8">
                  {" "}
                  <MdLock />{" "}
                </span>
                <Form.Group>
                  <Form.Control
                    id="signup9"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
              </InputGroup>
            </Row>
            <Row id="signup10">Forgot your pasword ?</Row>
            <Row style={{ width: "100%" }}>
              {" "}
              <Col>
                <Button
                  id="signup11"
                  style={{ width: "66%" }}
                  variant="primary"
                  type="submit"
                >
                  SignUp
                </Button>{" "}
              </Col>
            </Row>
            <Row id="signup12">Already have a Account</Row>
            <Row id="signup10">Login</Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
