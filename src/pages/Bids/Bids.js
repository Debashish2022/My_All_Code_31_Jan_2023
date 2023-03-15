import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Row, Button } from "react-bootstrap";
import "./Bids.css";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import timer from "../../assets/bids/cardImg.png";
import ProjectBidsCommonHeaderImg from "../../assets/bids/image7.png";
import HomeCard from "../../components/HomeCard/HomeCard";
import { apicaller } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import Cardcomp from "../../components/Cardcomp/Cardcomp";

export default function Bids() {
  const [bidDetail, setBidDetail] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBidDetail();
  }, []);

  const getBidDetail = () => {
    setIsLoading(true);
    apicaller("project/get", null, "get", null, null)
      .then((res) => {
        setBidDetail(res?.data?.result);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  };

  const activeStatus = bidDetail?.find((item) => item?.status === "active");

  const inactiveStatus = bidDetail?.find((item) => item?.status === "inactive");

  const completedStatus = bidDetail?.find(
    (item) => item?.status === "completed"
  );

  return (
    <div>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
            marginBottom: "200px",
          }}
        >
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <>
          <CommonHeader
            pagename="Project Bids"
            linkname="Home / Project Bids"
            img={ProjectBidsCommonHeaderImg}
          />
          <Container className="pt-5 pb-2" style={{ textAlign: "center" }}>
            {bidDetail.length === 0 && (
              <div
                style={{
                  minHeight: "10vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <h3>No Auctions Available</h3>
              </div>
            )}

            {/* live */}
            {activeStatus && (
              <Row>
                <Col md={4}></Col>
                <Col md={4} id="auctionsNameInBidsPage">
                  Live Auctions
                </Col>
                <Col></Col>
              </Row>
            )}
            {/* <Row>
              {bidDetail?.map((item, i) => (
                <>
                  {item?.status === "active" ? (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <HomeCard
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row> */}

            <Row>
              {bidDetail?.map((item, i) => (
                <>
                  {item?.status === "active" ? (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <Cardcomp
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row>

            {/* inactive  */}
            {inactiveStatus && (
              <Row>
                <Col md={4}></Col>
                <Col md={4} id="auctionsNameInBidsPage">
                  Upcoming Auctions
                </Col>
                <Col></Col>
              </Row>
            )}
            {/* <Row>
              {bidDetail?.map((item, i) => (
                <>
                  {item?.status === "inactive" ? (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <HomeCard
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row> */}

            <Row>
              {bidDetail?.map((item, i) => (
                <>
                  {item?.status === "inactive" ? (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <Cardcomp
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row>

            {/* completed */}
            {completedStatus && (
              <Row>
                <Col md={4}></Col>
                <Col md={4} id="auctionsNameInBidsPage">
                  Completed Auctions
                </Col>
                <Col></Col>
              </Row>
            )}
            {/* <Row>
              {bidDetail?.slice(0,loadmore)?.map((item, i) => (
                <>
                  {item?.status === "completed" ? (
                    <Col xs={12} md={4} lg={4} id="home4" key={i} style={{filter: "grayscale(60%)"}}>
                      <HomeCard
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row> */}

            <Row>
              {bidDetail?.reverse().map((item, i) => (
                <>
                  {item?.status === "completed" ? (
                    <Col
                      xs={12}
                      md={4}
                      lg={4}
                      id="home4"
                      key={i}
                      style={{ filter: "grayscale(60%)" }}
                    >
                      <Cardcomp
                        bidStartDate={item?.startDate}
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        projectname={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ) : null}
                </>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}
