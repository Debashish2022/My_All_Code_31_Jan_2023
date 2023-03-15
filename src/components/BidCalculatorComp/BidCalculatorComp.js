import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./BidCalculatorComp.css";

export default function BidDateCalculateComp(props) {
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
    <div>
      <div id="biddingpage5">
        <Row>
          <Col>
            <div id="biddingpage6">
              <div id="biddingpage7">{time.days || "0"}</div>
              <div>Days</div>
            </div>
          </Col>
          <Col>
            <div id="biddingpage6">
              <div id="biddingpage7">{time.hours || "00"}</div>
              <div>Hours</div>
            </div>
          </Col>
          <Col>
            <div id="biddingpage6">
              <div id="biddingpage7">{time.minutes || "00"}</div>
              <div>Minutes</div>
            </div>
          </Col>
          <Col>
            <div id="biddingpage6">
              <div id="biddingpage7">{time.seconds || "00"}</div>
              <div>Seconds</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
