import React from "react";
import "./Aboutus.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import AboutusBackgroundImage from "../../assets/aboutus/image 3.png";
import AboutuscardIcon from "../../components/AboutuscardIcon/AboutuscardIcon";
import Aboutuscard from "../../components/AboutusCard/Aboutuscard";
import { TfiHummer } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import { FaSmile } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutusDescriptionCard from "../../components/AboutusDescriptionCard/AboutusDescriptionCard";
import AboutUsCommonHeaderImg from '../../assets/aboutus/image2.png';
import { useNavigate } from "react-router-dom";
import {CgFileDocument} from 'react-icons/cg';

function Aboutus() {

  const navigate = useNavigate();
  
  return (
    <>
      {/* added headers */}
      <CommonHeader pagename="About us" linkname="Home / About Us" img={AboutUsCommonHeaderImg} />

      <Container fluid id="abt3">
        <Container>
          <Row>           
            <Col md={6} xs={12}>
              <Row>
                <Col id="abt6">
                  <div id="abt7">WHO WE ARE!</div>
                  <div id="abt8">We Work for Your Incredible Success</div>
                  <div id="abt9">
                    {" "}
                    But getting your own auction site up and running has always
                    required learning complex coding languages, or hiring an
                    expensive design firm for thousands of dollars and months of
                    work.
                  </div>
                  <div id="abt10">
                    <Button id="contactUsBtn" size="sm" onClick={() => navigate("/contactus")}>
                      Contact Us
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              <div id="abt4">
                <img
                  src={AboutusBackgroundImage}
                  alt="backgroundImage"
                  id="abt5"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col md={12} id="abt11">
                <div id="abt12">Why Choose Us</div>
              </Col>
            </Row>
            <Row>
              <Col md={12} id="abt11">
                <div id="abt13">
                  Explore on the world's best & largest Bidding marketplace with
                  our beautiful Bidding products.We want to be a part of your
                  smile, success and future growth.
                </div>
              </Col>
            </Row>
          </Row>
          <Row style={{ marginTop: "1.5rem" }}>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Best in service"
                number="01"
                class="abtcard1"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Fastest Bid Response"
                number="02"
                class="abtcard2"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Perfect project value"
                number="03"
                class="abtcard1"
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="User friendly interface"
                number="04"
                class="abtcard2"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Market Comparision"
                number="05"
                class="abtcard1"
              />
            </Col>
            <Col md={4} xs={12} id="abtcard">
              <Aboutuscard
                title="Strong discussion"
                number="06"
                class="abtcard2"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <AboutusDescriptionCard />
            </Col>
          </Row>
          <Row style={{ marginTop: "1.5rem" }}>
            <Col md={3} xs={6} id="abtcard">
              <AboutuscardIcon
                iconName={<TfiHummer />}
                number="2345"
                title="Successful Bids"
              />
            </Col>
            <Col md={3} xs={6} id="abtcard">
              <AboutuscardIcon
                iconName={<FaHammer  />}
                title="Total Bids"
                number="234567"
              />
            </Col>
            <Col md={3} xs={6} id="abtcard">
              <AboutuscardIcon
                iconName={<FaSmile />}
                number="4635"
                title="Happy Clients"
              />
            </Col>
            <Col md={3} xs={6} id="abtcard">
              <AboutuscardIcon
                iconName={<CgFileDocument />}
                number="5555"
                title="Good Reviews"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Aboutus;
