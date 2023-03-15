import React, { useEffect, useState } from "react";
import "./ActiveAuctionComp.css";
import HomeCard from "../HomeCard/HomeCard";
import { Col, Row } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { apicaller } from "../../utils/api";
import Cardcomp from "../Cardcomp/Cardcomp";

export default function ActiveAuctionComp() {
  const [isLoading, setIsLoading] = useState(true);
  const [getallProjectsByUser, setGetallProjectsByUser] = useState([]);

  const [getProfile, setGetProfile] = useState();

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

  const user = useSelector((state) => state.user);
  const userId = user?._id;
  const userToken = user?.token;

  useEffect(() => {
    getallProjectsByUserFun();
  }, []);

  const getallProjectsByUserFun = () => {
    setIsLoading(true);
    apicaller(`project/get/${userId}`, null, "get", userToken)
      .then((res) => {
        setGetallProjectsByUser(res?.data?.result);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const activeAuctions = getallProjectsByUser.find(
    (item) => item?.status === "active"
  );

  return (
    <div>
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
          <Row className="mt-3">
            {getallProjectsByUser.length === 0 ? (
              <h3 className="mt-5" style={{ textAlign: "center" }}>
                No Live Auctions Available
              </h3>
            ) : (
              <>
                {activeAuctions ? (
                  <>
                    {getallProjectsByUser?.map((item, index) => (
                      <>
                        {item?.status === "active" ? (
                          <Col
                            xs={12}
                            md={4}
                            lg={4}
                            id="myauction1"
                            key={index}
                          >
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
                    ))}{" "}
                  </>
                ) : (
                  <h3 className="mt-5" style={{textAlign: 'center'}}>No Live Auctions Available</h3>
                )}
              </>
            )}
          </Row>
        )}
    </div>
  );
}
