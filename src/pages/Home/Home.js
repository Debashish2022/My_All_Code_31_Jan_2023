import React, { useEffect, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import HomeCard from "../../components/HomeCard/HomeCard";
import timer from "../../assets/homecard/timerbg.png";
import timerr from "../../assets/homecard/timerbgg.png";
import { apicaller } from "../../utils/api";
import Loader from "../../components/Loader/Loader";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import Cardcomp from "../../components/Cardcomp/Cardcomp";
export default function Home() {
  const [advlexoneBanner, setLexoneAdvBanner] = useState([]);
  const [liveDetail, setLiveDetail] = useState([]);
  const [loadmore, setLoadmore] = useState(6);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllHomeData();
  }, []);

  const getAllHomeData = () => {
    setIsLoading(true);

    apicaller("banner", null, "get", null)
      .then((res) => {
        setLexoneAdvBanner(res?.data?.result);
      })
      .catch((e) => {
        console.log(e);
      });

    apicaller("project/get-by-status?status=active", null, "get", null, null)
      .then((res) => {
        setLiveDetail(res?.data?.result);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  };

  const showMoreBtn = () => {
    setLoadmore(loadmore + 3);
  };

  return (
    <>
      <Container fluid style={{ padding: "0px" }}>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "80vh",
            }}
          >
            <Loader />
          </div>
        ) : (
          <Container fluid id="home1">
            {/*Banner  */}
            <Carousel>
              {advlexoneBanner?.map((item, i) => (
                <Carousel.Item interval={1500} key={i}>
                  <img
                  id="home7"
                    className="d-block w-100"
                    src={item?.image}
                    alt={i + 1}
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <Row id="exploreTxtRow">
              <Col id="home2">LIVE AUCTIONS</Col>
            </Row>
            <Row id="exploreTxtRow">
              <Col id="home3">
                Explore on the world's best & largest Bidding marketplace with
                our beautiful Bidding tech <br />
                products. We want to be a part of your smile, success and future
                growth.
              </Col>
            </Row>
            <Container>
              {/* <Row>
                {liveDetail
                  ?.slice(0, loadmore)
                  ?.reverse()
                  ?.map((item, i) => (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <HomeCard
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        projectname={item?.name}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ))}
              </Row> */}

              <Row>
                {liveDetail
                  ?.slice(0, loadmore)
                  ?.reverse()
                  ?.map((item, i) => (
                    <Col xs={12} md={4} lg={4} id="home4" key={i}>
                      <Cardcomp
                        bidLastDate={item?.endDate}
                        image={item?.image}
                        bidName={item?.name}
                        ownerfirstname={item?.createdBy?.firstName}
                        ownerlastname={item?.createdBy?.lastName}
                        companyname={item?.createdBy?.companyName}
                        projectname={item?.name}
                        descriptions={item?.descriptions}
                        price={item?.price}
                        sheet={item?.sheet}
                        status={item?.status}
                        details1="Details"
                      />
                    </Col>
                  ))}
              </Row>
              {liveDetail.length > 6 ? (
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <Button
                      id="showMoreBtn"
                      className="mb-5"
                      onClick={() => showMoreBtn()}
                    >
                      Loadmore...
                    </Button>
                  </Col>
                </Row>
              ) : null}
            </Container>
          </Container>
        )}
      </Container>
    </>
  );
}
