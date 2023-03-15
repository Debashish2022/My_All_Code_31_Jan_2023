import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Getintouch.css";
import { getUserToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";

function Getintouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const userToken = useSelector(getUserToken);

  const regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  const regPhone = /^\d{10}$/;

  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  function validation() {
    if (name.length === 0) {
      eToast("Name is required");
      return false;
    } else if (!regEmail.test(email)) {
      eToast("Not a Valid Email");
      return false;
    } else if (!regPhone.test(phone)) {
      eToast("Enter Valid Phone Number");
      return false;
    } else if (subject.length === 0) {
      eToast("Subject is required");
      return false;
    } else if (message.length === 0) {
      eToast("Please add a Message");
      return false;
    } else {
      return true;
    }
  }

  const GetInTouch = async () => {
    if (validation()) {
      setLoading(true);
      var data = {
        name: name,
        email: email,
        phone: phone,
        category: subject,
        message: message,
      };

      await apicaller(
        "contact/add",
        data,
        "POST",
        userToken,
        "application/json"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setLoading(false);
            sToast("Message sent successfully ");
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
          }
        })
        .catch(() => {
          eToast("Couldn't sent");
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <ToastContainer />
      <Container fluid>
        <Row>
          <Col id="getintouch1">
            <Row id="getintouch4"> Get In Touch</Row>
            <Row id="getintouch5">
              {" "}
              Feel free to ask me any question or let's do to talk about our{" "}
              future collaboration.
            </Row>

            <Row id="getintouch2">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="Email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>
            <Row id="getintouch2">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Col>
            </Row>
            <Row id="getintouch2">
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Your message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row id="getintouch3">
              <Col>
                <Button id="getintouch6" onClick={() => GetInTouch()}>
                  {loading ? (
                    <Loader animation="border" size="sm" variant="light" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Getintouch;
