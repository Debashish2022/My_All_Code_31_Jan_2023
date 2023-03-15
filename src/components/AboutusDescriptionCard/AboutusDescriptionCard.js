import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./AboutusDescriptionCard.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import { apicaller } from "../../utils/api";

const AboutusDescriptionCard = () => {
  const [abtImg, setAbtImg] = useState([]);

  useEffect(() => {
    getAbtImg();
  }, []);

  const getAbtImg = () => {
    apicaller("testimonial", null, "get", null, null)
      .then((res) => {
        setAbtImg(res?.data?.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };

  const Card = ({ item }) => {
    return (
      <div id="cardOfSliderDiv">
        <div id="cardOfSliderDivImgDiv">
          <img
            // className="multi__image"
            src={item?.photo}
            alt="Image"
            id="cardOfSliderDivImg"
          />
        </div>
        <p id="cardOfSliderDivPara">{item?.testimonial}</p>

        <p id="cardOfSliderDivName">{item?.name}</p>
      </div>
    );
  };

  return (
    <Container
      className="BootstrapMulti"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <Row style={{ width: "90%" }}>
        <Carousel partialVisible={true} responsive={responsive}>
          {abtImg?.map((item) => (
            <Card item={item} />
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default AboutusDescriptionCard;
