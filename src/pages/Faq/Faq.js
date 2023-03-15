import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Faqcomp from "../../components/Faqcomp/Faqcomp";
import Loader from "../../components/Loader/Loader";
import { getUserToken } from "../../redux/Slice/userSlice";
import { apicaller } from "../../utils/api";
import "./Faq.css";

function Faq() {
  const [getFaq, setGetFaq] = useState([]);

  const [loading, setloading] = useState(true);

  const userToken = useSelector(getUserToken);

  useEffect(() => {
    getFaqFun();
  }, []);

  const getFaqFun = () => {
   apicaller("faq", null, "get", userToken, null)
      .then((res) => {
        setloading(false);
        setGetFaq(res?.data?.result);
      })
      .catch((err) => console.log("error is ", err));
  };

  return (
    <>
      {loading ? (
        <div id="loaderContainerFaq">
          <Loader animation="border" size="md" variant="secondary" />
        </div>
      ) : (
        <Container fluid id="containerFaq">
          <Row>
            <Col></Col>
            <Col md={10}>
              <Row id="faq_title">General FAQ’s</Row>

              {getFaq?.map((item, ind) => (
                <div key={ind}>
                  <Faqcomp title={item?.question} content={item?.answer} />
                </div>
              ))}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Faq;
