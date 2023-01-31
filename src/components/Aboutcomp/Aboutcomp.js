import React from "react";
import { Col} from "react-bootstrap";
import "./Aboutcomp.css";
export default function Aboutcomp(props) {
  return (
    <>
      <Col md={6} lg={4} sm={12} xs={12}>
        <div id={props.color ? "mydiv4" : "mydiv3"}>
          <div id="style">{props.text}</div>
          <div id="numberdiv">
          {props.number}
          </div>
        </div>
      </Col>
    </>
  );
}
