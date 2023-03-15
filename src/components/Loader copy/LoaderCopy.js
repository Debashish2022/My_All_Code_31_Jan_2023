import React from "react";
import { Spinner } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function LoaderCopy() {
  return (
    <div>
      <Spinner animation="border" size="sm" />
    </div>
  );
}
