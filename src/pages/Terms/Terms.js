import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Terms.css";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserToken } from "../../redux/Slice/userSlice";
import Loader from "../../components/Loader/Loader";

export default function Terms() {
  const [getTerms, setGetTerms] = useState([]);

  const [loading, setLoading] = useState(true);

  const userToken = useSelector(getUserToken);

  useEffect(() => {
    getTermsFun();
  }, []);

  const getTermsFun =  () => {
     apicaller("terms", null, "get", userToken, null)
      .then((res) => {
        setLoading(false);
        setGetTerms(res?.data?.result);
      })
      .catch((err) => console.log("error is ", err));
  };

  return (
    <>
      {loading ? (
        <div id="loaderContainerTerms">
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <Container fluid className="pt-5 pb-5" id="containerTerms">
          <Row>
            <Col></Col>
            <Col md={10}>
              <Row>
                <Col id="con">Website Terms and Conditions</Col>
              </Row>
              {getTerms.map((item, index) => (
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
