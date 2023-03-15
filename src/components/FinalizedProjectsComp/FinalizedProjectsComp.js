import React, { useEffect, useState } from "react";
import "./FinalizedProjectsComp.css";
import { Col, Row } from "react-bootstrap";
import timer from "../../assets/homecard/timerbg.png";
import HomeCard from "../HomeCard/HomeCard";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserId, getUserToken } from "../../redux/Slice/userSlice";
import Loader from "../Loader/Loader";
import Cardcomp from "../Cardcomp/Cardcomp";

export default function FinalizedProjectsComp() {
  const [getFinalisedProjects, setGetFinalisedProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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

  const userId = useSelector(getUserId);
  const userToken = useSelector(getUserToken);

  useEffect(() => {
    getFinalisedProjectsFun();
  }, []);

  const getFinalisedProjectsFun = () => {
     apicaller(
      `project/finalize-projects?id=${userId}`,
      null,
      "GET",
      userToken,
      null
    ).then((res) => {
      setIsLoading(false);
      setGetFinalisedProjects(res?.data?.result);
    });
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            marginTop: 200,
            marginBottom: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <>
        {
          getFinalisedProjects.length === 0 ? <h3 className="mt-5" id="finalizeAProjectTxt">Please Finalize A Project!</h3> :
          <Row>
          {getFinalisedProjects?.map((item, ind) => (
            <Col xs={12} md={4} lg={4} className="mt-4" key={ind}>
              <Cardcomp
                bidWinnerFirstName={item?.winner?.firstName}
                bidWinnerLastName={item?.winner?.lastName}
                bidWinner={item?.winner?.email}
                bidWinnerid= {item?.winner?._id}
                image={item?.image}
                finalisePrice={item?.exitPrice}
                bidStartDate={item?.startDate}
                bidLastDate={item?.endDate}
                bidName={item?.name}
                projectname={item?.name}
                ownerfirstname={getProfile?.firstName}
                ownerlastname={getProfile?.lastName}
                companyname={getProfile?.companyName}
                projectId={item?._id}
                descriptions={item?.descriptions}
                price={item?.price}
                status={item?.status}
                details2="Details"
              />
            </Col>
          ))}
        </Row>
        }
        </>
      )}
    </>
  );
}
