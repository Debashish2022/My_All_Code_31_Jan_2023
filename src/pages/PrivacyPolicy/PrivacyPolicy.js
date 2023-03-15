import React, { useState, useEffect } from "react";
import "./PrivacyPolicy.css";
import { Container, Row, Col } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserToken } from "../../redux/Slice/userSlice";
import Loader from "../../components/Loader/Loader";

export default function PrivacyPolicy() {
  const [getPolicy, setGetPolicy] = useState([]);

  const [loading, setLoading] = useState(true);

  const userToken = useSelector(getUserToken);

  useEffect(() => {
    getPolicyFun();
  }, []);

  const getPolicyFun = () => {
   apicaller("policy", null, "get", userToken, null)
      .then((res) => {
        setLoading(false);
        setGetPolicy(res?.data?.result);
      })
      .catch((err) => console.log("error is ", err));
  };

  return (
    <>
      {loading ? (
        <div id="loaderContainerPolicy">
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <Container fluid className="pt-5 pb-4" id="containerTerms">
          <Row>
            <Col></Col>
            <Col md={10}>
              <Row>
                <Col id="con">Website Privacy Policies</Col>
              </Row>

              {getPolicy.map((item, index) => (
                <Row key={index}>
                  <Col id="one">{item?.description}</Col>
                </Row>
              ))}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
