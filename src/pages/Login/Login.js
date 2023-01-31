import React from "react";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Deba from "../Modal/Modal";
export default function Login() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <div id="div1">Login</div>
        <div id="div2">Please enter your login and Password</div>
        <Row>
          <Col></Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail" id="form1">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              id="form2"
            >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button
              id="mybtn"
              variant="primary"
              type="submit"
              onClick={() => setModalShow(true)}
            >
              Login
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Deba show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </>
  );
}
