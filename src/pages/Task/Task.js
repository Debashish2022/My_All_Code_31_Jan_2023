import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Task.css";
export default function Task() {
  const [num, setNum] = useState(0);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  return (
    <>
      <div className="firstdiv">
        <div className="seconddiv">
          <h2>{num}</h2>
        </div>
        <div className="mybtn">
          <Button id="btn" onClick={plus}>
            +
          </Button>
          <Button id="btn" onClick={minus}>
            -
          </Button>
        </div>
      </div>
    </>
  );
}
