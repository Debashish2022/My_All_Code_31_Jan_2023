import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../assets/Footer/lexonelogo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { apicaller } from "../../utils/api";
import Loader from "../Loader/Loader";

export default function Footer() {
  const [getDetailsOfLexone, setGetDetailsOfLexone] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetDetailsOfLexone();
  }, []);

  const GetDetailsOfLexone = () => {
   apicaller("details", null, "GET", null, null).then((res) => {
      setGetDetailsOfLexone(res?.data?.result);
      setLoading(false);
    });
  };

  return (
    <div>
      <Container fluid id="footer_bg">
        <Container>
          <Row>
            <Col id="footer1" md={2} lg={2} xs={12} sm={12}>
              <Image src={logo} id="footer9" />
            </Col>
            <Col></Col>
            <Col id="footer1" md={3} lg={3} xs={12} sm={12}>
              <Row id="footer2">
                <Col md={8} lg={8} xs={12} sm={12}>FAQ & Help</Col>
                <Col md={8}></Col>
              </Row>
              <Row>
                <Col md={2} lg={2} xs={12} sm={12}>
                  <Link to="/faq" id="footer3">
                    FAQ
                  </Link>
                </Col>
                <Col md={10}></Col>
              </Row>
              <Row>
                <Col md={10} lg={8} xs={12} sm={12}>
                  <Link to="/privacypolicy" id="footer3">
                    Privacy Policy
                  </Link>
                </Col>
                <Col md={9}></Col>
              </Row>
              <Row>
                <Col md={10} lg={8} xs={12} sm={12}>
                  <Link id="footer3" to="/terms">
                    Terms & Condition
                  </Link>
                </Col>
                <Col md={4}></Col>
              </Row>
            </Col>

            <Col id="footer1" md={3} lg={3} xs={12} sm={12}>
              <Row id="footer2">
                <Col md={3}>Address</Col>
                <Col></Col>
              </Row>
              <>
                {/* {getDetailsOfLexone?.map((e, i) => (
                    <div key={i}> */}
                {/* to show address */}
                <Row>
                  <Col md={11} lg={8} xs={6} sm={6}>
                    <a
                      id="footer3"
                      target="_blank"
                      href="https://www.google.com/maps/place/1509+Lady+St+c,+Columbia,+SC+29201,+USA/@34.0046825,-81.0309434,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a52ade2e2f3b:0x398bf97742ead4b8!8m2!3d34.0046825!4d-81.0287547"
                    >
                      1509 Lady St,Suite C, Columbia SC - 29201, United States
                    </a>
                    {/* {e?.address?.map((item) => (
                          <>
                            {item.street}, {item.landmark}, {item.zip}
                          </>
                        ))} */}
                  </Col>
                  <Col md={4}></Col>
                </Row>

                {/* to show phone */}
                <Row>
                  <Col md={10} lg={6} xs={6} sm={6}>
                    <a id="footer3" href="tel:+16782767119">
                      +1 (678) 276-7119
                    </a>
                    {/* {e?.phones?.map((item) => (
                          <>
                            <div style={{ padding: "0px" }} tel>
                              <a href="tel: +919861166262">{item?.phoneNumber}</a>
                            </div>
                          </>
                        ))} */}
                  </Col>
                  <Col md={8}></Col>
                </Row>

                {/* to show email id */}
                <Row>
                  <Col md={6}>
                    <a id="footer3" href="mailto:someone@example.com">
                      hr@lexonesolutions.net
                    </a>
                    {/* {e?.emails?.map((item) => (
                          <>
                            <div style={{ padding: "0px" }}>{item?.email}</div>
                          </>
                        ))} */}
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </>
            </Col>
            <Col id="footer1" md={3} lg={3} xs={12} sm={12}>
              <Row>
                <Col id="footer5">
                  <div id="footer7">
                    <div id="footer4">
                      {" "}
                      <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram id="footer6" />
                      </a>
                    </div>
                    <div id="footer4">
                      {" "}
                      <a href="https://www.twitter.com/" target="_blank">
                        <BsTwitter id="footer6" />
                      </a>
                    </div>
                    <div id="footer4">
                      {" "}
                      <a href="https://www.facebook.com/" target="_blank">
                        <ImFacebook id="footer6" />
                      </a>
                    </div>
                    <div id="footer4">
                      {" "}
                      <Link to="/contactus">
                        <IoCallSharp id="footer6" />
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row id="footer10">
            <Col md={3}></Col>
            <Col md={10} lg={6} xs={12} sm={12}>
              <a href="https://www.thecodekart.com" target="_blank" id="codekartTxt">Copyright 2023 Lexone Solutions | Designed by Codekart Solution
              Pvt. Ltd.</a>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
