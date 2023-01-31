import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./LiveBiddingcomp.css";
function LiveBiddingcomp(props) {
  const [countdownDate, setCountdownDate] = useState(
    new Date(`${props.bidLastDate}`).getTime()
  );
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setTime({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      
        <Row id="bidcard1">
          <Col>
            <Row id="bidcard2">
              <Col>
                <Row id="bidcard8"> BID ENDS IN </Row>
                <Row>
                  <Col>
                    <div id="bidcard6">{time.days || "0"}</div>
                    <div id="bidcard7">days</div>
                  </Col>
                  <Col>
                    <div id="bidcard6">{time.hours || "00"}</div>
                    <div id="bidcard7">hours</div>
                  </Col>
                  <Col>
                    <div id="bidcard6">{time.minutes || "00"}</div>
                    <div id="bidcard7">minutes</div>
                  </Col>
                  <Col>
                    <div id="bidcard6">{time.seconds || "00"}</div>
                    <div id="bidcard7">seconds</div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row id="bidcard3">
              <Col>
                <Row> {props.project}</Row>
                <Row id="bidcard5"> {props.projectname}</Row>
              </Col>
            </Row>
          
            <Row>
              
                <Button id="bidcard4"> Details</Button>
             
            </Row>
          </Col>
        </Row>
    </>
  );
}

export default LiveBiddingcomp;