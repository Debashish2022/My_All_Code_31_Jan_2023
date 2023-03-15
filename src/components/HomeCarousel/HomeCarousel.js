import React from "react";
import { Carousel } from "react-bootstrap";

export default function HomeCarousel(props) {
  return (
    <>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={props.sliderImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.caption}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
}
