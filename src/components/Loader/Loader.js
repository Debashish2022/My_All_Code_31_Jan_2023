import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader(props) {
  return (
    <div>
      <Spinner animation={props.animation} size={props.size} variant={props.variant} />
    </div>
  );
}

export default Loader;
