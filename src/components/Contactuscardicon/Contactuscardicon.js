import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contactuscardicon.css";
function Contactuscardicon(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col id="contactuscardicon1" className={props.class}>
            <div className="{props.iconsName}">{props.iconName}</div>
            <div>
              <div>{props.number}</div>
              <div>{props.title}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contactuscardicon;
