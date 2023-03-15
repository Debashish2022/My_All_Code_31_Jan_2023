import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contactus.css";
import locationimage from "../../assets/Contactus/location.png";
import mapimg from "../../assets/Contactus/mapimg.png";
import Getintouch from "../../components/Getintouch/Getintouch";
import Faq from "../Faq/Faq";
import Locationcomp from "../../components/Locationcomp/Locationcomp";
import Email from "../../assets/Contactus/email.png";
import Contact from "../../assets/Contactus/contact.png";
import { TfiHummer } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { FaSmile } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import ContactUsCommonHeaderImg from "../../assets/Contactus/Contactusbg.png";
import { apicaller } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import AboutuscardIcon from "../../components/AboutuscardIcon/AboutuscardIcon";
import { TiDocumentText } from "react-icons/ti";

function Contactus() {
  // latitude and loingitude of 1509 Lady St,Suite C, Columbia SC - 29201, USA
  const Latitude = "34.004760";
  const Longitude = "-81.028830";

  const [loading, setLoading] = useState(true);

  const [getDetailsOfLexone, setGetDetailsOfLexone] = useState([]);

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
    <>
      {loading ? (
        <div id="loaderContainerContactUs">
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <>
          <CommonHeader
            pagename="Contact Us"
            linkname="Home / Contact Us"
            img={ContactUsCommonHeaderImg}
          />
          <Container>
            {/* location email contact details card start */}
            <Row id="contactus13">
              {getDetailsOfLexone?.map((e, i) => (
                <>
                  <Col md={4}>
                    <Locationcomp
                      locationimg={locationimage}
                      locationheading="Address"
                      locationdescription="1509 Lady St,Suite C, Columbia SC - 29201, United States"
                    />
                  </Col>
                  <Col md={4}>
                    <Locationcomp
                      locationimg={Contact}
                      locationheading="Contact"
                      locationdescription="+1 (678) 276-7119"
                    />
                  </Col>
                  <Col md={4}>
                    <Locationcomp
                      locationimg={Email}
                      locationheading="Email"
                      locationdescription="hr@lexonesolutions.net
                      "
                    />
                  </Col>
                </>
              ))}
            </Row>
          </Container>

          <Container fluid id="contactus9">
            {/* location email contact details card end */}
            {/* getintouch and map start */}
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <Getintouch />
                </Col>
                <Col xs={12} md={6}>
                  <iframe
                    id="contactus8"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.52694999066!2d-81.03094338493663!3d34.00468248061882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a52ade2e2f3b%3A0x398bf97742ead4b8!2s1509%20Lady%20St%20c%2C%20Columbia%2C%20SC%2029201%2C%20USA!5e0!3m2!1sen!2sin!4v1673332711000!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    style={{ borderRadius: "2rem" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Col>
              </Row>
            </Container>
            {/* getintouch and map end */}

            {/* Faq start */}
            <Container>
              <Row>
                <Col></Col>
                <Col md={12} xs={12} id="contactus10">
                  {" "}
                  <Faq />{" "}
                </Col>
              </Row>
            </Container>

            {/* Faq end */}

            {/* cardcompoentstart */}
            <Row style={{ marginTop: "1.5rem" }}>
              <Col md={3} id="abtcard">
                <AboutuscardIcon
                  iconName={<TfiHummer />}
                  number="2345"
                  title="successfulBids"
                />
              </Col>
              <Col md={3} id="abtcard">
                <AboutuscardIcon
                  iconName={<FaHammer />}
                  title="totalBids"
                  number="234567 "
                />
              </Col>
              <Col md={3} id="abtcard">
                <AboutuscardIcon
                  iconName={<FaSmile />}
                  number="4635"
                  title="Happy Clients"
                />
              </Col>
              <Col md={3} id="abtcard">
                <AboutuscardIcon
                  iconName={<TiDocumentText />}
                  number="5555"
                  title="Good Reviews"
                />
              </Col>
            </Row>
            {/* cardcompoentend */}
          </Container>
        </>
      )}
    </>
  );
}

export default Contactus;
