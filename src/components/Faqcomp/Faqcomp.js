import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Faqcomp.css";

function Faqcomp(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("faqcomp__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "faqcomp__icon" : "faqcomp__icon rotate"
    );
  }

  return (
    <div className="faqcomp__section">
      <button className={`faqcomp ${setActive}`} onClick={toggleAccordion}>
        <p className="faqcomp__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="faqcomp__content"
      >
        <div
          className="faqcomp__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Faqcomp;
