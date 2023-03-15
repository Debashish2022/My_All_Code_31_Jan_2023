import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import Footer from "../../components/Footer/Footer";
import "./ProjectDashboard.css";
import DashBoard from "../../components/DashBoard/DashBoard";
import HomeCard from "../../components/HomeCard/HomeCard";
import ActiveAuctionComp from "../../components/ActiveAuctionComp/ActiveAuctionComp";
import MyAuctionComp from "../../components/MyAuctionComp/MyAuctionComp";
import FinalizedProjectsComp from "../../components/FinalizedProjectsComp/FinalizedProjectsComp";
import OpenAuctionComp from "../../components/OpenAuctionComp/OpenAuctionComp";
import ProfileDashboardBg from "../../assets/DashboardComp/ProfileDashboardbg.png";

export default function ProjectDashboard() {
  const [allBtn, setAllBtn] = useState("Dashboard");

  return (
    <>
      {/* added headers */}

      <CommonHeader
        pagename="My Account"
        linkname="Home / Profile"
        img={ProfileDashboardBg}
      />

      <Container fluid id="profileContainer">
        {/* My account all button Start */}
        <Container>
          <Row id="projectdashboard1">
            <Col></Col>
            <Col id="projectdashboard4" md={2} sm={12} xs={12}>
              <div
                style={
                  allBtn === "Dashboard"
                    ? { backgroundColor: "#E47013" }
                    : { backgroundColor: "#0B3ED9" }
                }
                onClick={() => setAllBtn("Dashboard")}
                id="projectdashboard2"
              >
                Dashboard
              </div>
            </Col>
            <Col id="projectdashboard4" md={2} sm={12} xs={12}>
              <div
                style={
                  allBtn === "ActiveAuctions"
                    ? { backgroundColor: "#E47013" }
                    : { backgroundColor: "#0B3ED9" }
                }
                onClick={() => setAllBtn("ActiveAuctions")}
                id="projectdashboard2"
              >
                Active Auctions
              </div>
            </Col>
            <Col id="projectdashboard4" md={2} sm={12} xs={12}>
              <div
                style={
                  allBtn === "MyAuctions"
                    ? { backgroundColor: "#E47013" }
                    : { backgroundColor: "#0B3ED9" }
                }
                onClick={() => setAllBtn("MyAuctions")}
                id="projectdashboard2"
              >
                My Auctions
              </div>
            </Col>
            <Col id="projectdashboard4" md={2} sm={12} xs={12}>
              <div
                style={
                  allBtn === "FinalisedProjects"
                    ? { backgroundColor: "#E47013" }
                    : { backgroundColor: "#0B3ED9" }
                }
                onClick={() => setAllBtn("FinalisedProjects")}
                id="projectdashboard2"
              >
                Finalised Projects
              </div>
            </Col>
            <Col id="projectdashboard4" md={2} sm={12} xs={12}>
              <div
                style={
                  allBtn === "OpenaAuction"
                    ? { backgroundColor: "#E47013" }
                    : { backgroundColor: "#0B3ED9" }
                }
                onClick={() => setAllBtn("OpenaAuction")}
                id="projectdashboard2"
              >
                Open a Auction
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        {/* My account all button End */}

        {/* All pages after button click  */}
        <Container id="projectdashboard3">
          {allBtn === "Dashboard" ? <DashBoard /> : null}
          {allBtn === "ActiveAuctions" ? <ActiveAuctionComp /> : null}
          {allBtn === "MyAuctions" ? <MyAuctionComp /> : null}
          {allBtn === "FinalisedProjects" ? <FinalizedProjectsComp /> : null}
          {allBtn === "OpenaAuction" ? <OpenAuctionComp /> : null}
        </Container>

        {/* All pages after button click  */}
      </Container>
    </>
  );
}
