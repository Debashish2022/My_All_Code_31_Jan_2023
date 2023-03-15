import React, { useEffect, useState } from "react";
import "./MyAuctionComp.css";
import { Button, Col, Row } from "react-bootstrap";
import HomeCard from "../HomeCard/HomeCard";
import timer from "../../assets/homecard/timerbg.png";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Cardcomp from "../Cardcomp/Cardcomp";

export default function MyAuctionComp() {
  const [isLoading, setIsLoading] = useState(true);
  const [getallProjectsByUser, setGetallProjectsByUser] = useState([]);

  const [getProfile, setGetProfile] = useState();

  const [loadMore, setLoadMore] = useState(3);
  const [status, setStatus] = useState([]);

  const loadmoreFun = () => {
    setLoadMore(loadMore + 6);
  };

  useEffect(() => {
    getAllProfileDatasOfAuser();
  }, []);

  const getAllProfileDatasOfAuser = () => {
     apicaller(`user/get/${userId}`, null, "GET", userToken, null)
      .then((res) => {
        setGetProfile(res?.data?.result);
      })
      .catch((err) => {
        console.log("err in Get user profile is ", err);
      });
  };

  const user = useSelector((state) => state?.user);
  const userId = user?._id;
  const userToken = user?.token;

  console.log("userId is ", userId);

  useEffect(() => {
    getallProjectsByUserFun();
  }, []);

  const getallProjectsByUserFun = () => {
    setIsLoading(true);
    apicaller(`project/get/${userId}`, null, "get", userToken)
      .then((res) => {
        setGetallProjectsByUser(res?.data?.result);
        setStatus(res?.data?.result);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const activeStatus = status?.find((item) => item?.status === "active");

  const inactiveStatus = status?.find((item) => item?.status === "inactive");

  const completedStatus = status?.find((item) => item?.status === "completed");

  return (
    <div>
      <>
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "centre",
              marginTop: 200,
              marginBottom: 200,
            }}
          >
            <Loader animation="border" size="md" variant="secondary" />
          </div>
        ) : (
          <>
            {getallProjectsByUser.length === 0 ? (
              <h3 className="mt-5" style={{ textAlign: "center" }}>
                No Auctions Available
              </h3>
            ) : (
              <>
                <Row>
                  {activeStatus && (
                    <>
                      <Col md={4}></Col>
                      <Col md={4} xs={12} id="auctionsName">
                        Active Auctions
                      </Col>
                      <Col md={4}></Col>
                    </>
                  )}

                  {getallProjectsByUser?.map((item, index) => (
                    <>
                      {item?.status === "active" ? (
                        <Col xs={12} md={4} lg={4} id="myauction1" key={index}>
                          <Cardcomp
                            bidStartDate={item?.startDate}
                            bidLastDate={item?.endDate}
                            image={item?.image}
                            bidName={item?.name}
                            projectname={item?.name}
                            ownerfirstname={getProfile?.firstName}
                            ownerlastname={getProfile?.lastName}
                            companyname={getProfile?.companyName}
                            projectId={item?._id}
                            descriptions={item?.descriptions}
                            price={item?.price}
                            status={item?.status}
                            details="Details"
                            close="Close"
                          />
                        </Col>
                      ) : null}
                    </>
                  ))}
                </Row>

                <Row>
                  {inactiveStatus && (
                    <>
                      <Col md={4}></Col>
                      <Col md={4} xs={12} id="auctionsName">
                        Upcoming Auctions
                      </Col>
                      <Col md={4}></Col>
                    </>
                  )}
                  {getallProjectsByUser?.map((item, index) => (
                    <>
                      {item?.status === "inactive" ? (
                        <Col xs={12} md={4} lg={4} id="myauction1" key={index}>
                          <Cardcomp
                            bidStartDate={item?.startDate}
                            bidLastDate={item?.endDate}
                            image={item?.image}
                            bidName={item?.name}
                            projectname={item?.name}
                            ownerfirstname={getProfile?.firstName}
                            ownerlastname={getProfile?.lastName}
                            companyname={getProfile?.companyName}
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
                <Row>
                  {completedStatus ? (
                    <>
                      <Col md={4}></Col>
                      <Col md={4} xs={12} id="auctionsName">
                        Completed Auctions
                      </Col>
                      <Col></Col>
                    </>
                  ) : null}
                  {getallProjectsByUser
                    ?.slice(0)
                    ?.reverse()
                    ?.map((item, index) => (
                      <>
                        {item?.status === "completed" ? (
                          <Col
                            xs={12}
                            md={4}
                            lg={4}
                            id="myauction1"
                            key={index}
                            style={{ filter: "grayscale(60%)" }}
                          >
                            <Cardcomp
                              bidWinnerFirstName={item?.winner?.firstName}
                              bidWinnerLastName={item?.winner?.lastName}
                              bidWinner={item?.winner?.email}
                              bidWinnerid={item?.winner?._id}
                              finalisePrice={item?.exitPrice}
                              bidStartDate={item?.startDate}
                              bidLastDate={item?.endDate}
                              image={item?.image}
                              bidName={item?.name}
                              projectname={item?.name}
                              ownerfirstname={getProfile?.firstName}
                              ownerlastname={getProfile?.lastName}
                              companyname={getProfile?.companyName}
                              projectId={item?._id}
                              descriptions={item?.descriptions}
                              price={item?.price}
                              status={item?.status}
                              details3="Details"
                            />
                          </Col>
                        ) : null}
                      </>
                    ))}
                </Row>
              </>
            )}
          </>
        )}
      </>
    </div>
  );
}
