import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../components/CourseCard/CourseCard.css";
import CourseImage from "../../assets/cardImg.png";
import { AiFillStar } from "react-icons/ai";
import { BsInfoLg , BsEyeSlashFill} from "react-icons/bs";


function Cards() {
  const CardDetails = [
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
    {
      image: CourseImage,
      name: "MERN Stack Course 2023 - MongoDB, Express, React and NodeJS",
    },
  ];
  return (
    <Container style={{marginBottom: '2rem'}}>
      <Row>
        {CardDetails.map((list, index) => {
          return (
            <Col md={3} xs={12}>
              <div className="mainCardContainer" key={index}>
                <Row>
                  <Image src={list.image} />
                </Row>
                <div id="coursecard1">{list.name}</div>
                <Row>
                  <Col md={6} xs={6}>
                    <div id="coursecard2">by Dinesh Panda</div>
                    <div id="staricon">
                      <AiFillStar style={{ color: "#F8742B", fontSize: 'large' }} />
                      <AiFillStar style={{ color: "#F8742B", fontSize: 'large' }} />
                      <AiFillStar style={{ color: "#F8742B", fontSize: 'large' }} />
                      <AiFillStar style={{ color: "#F8742B", fontSize: 'large' }} />
                      <AiFillStar style={{ color: "#F8742B", fontSize: 'large' }}  />
                    </div>
                  </Col>
                  <Col md={6} xs={6}>
                    <div id="icondiv">
                    <div>
                        <BsInfoLg
                          style={{
                            backgroundColor: "#F05904",
                            borderRadius: "15px",
                            paddingTop: "0.4rem",
                            paddingLeft: "0.2rem",
                            paddingRight: "0.2rem",
                            paddingBottom: "0.4rem",
                            height: "28px",
                            width: "28px",
                            color: " #F8F9FE",
                            marginRight: "0.6rem",
                            cursor: 'pointer'
                          }}
                        />
                      </div>
                      <div>
                        <BsEyeSlashFill
                          style={{
                            backgroundColor: "#F05904",
                            borderRadius: "15px",
                            paddingTop: "0.4rem",
                            paddingLeft: "0.2rem",
                            paddingRight: "0.2rem",
                            paddingBottom: "0.4rem",
                            height: "28px",
                            width: "28px",
                            color: " #F8F9FE",
                            marginRight: "0.5rem",
                            cursor: 'pointer'
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Cards;
