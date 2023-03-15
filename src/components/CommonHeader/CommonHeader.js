import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import "./CommonHeader.css";

export default function CommonHeader(props) {
  return (
    <div>
        <Container fluid id="common1">
            <Image src={props.img}  id="common2"/>
            
            <div id="common3">
                <div id="common4">{props.pagename}</div>
                <div id="common5">{props.linkname}</div>
            </div>

        </Container>


    </div>
  )
}
