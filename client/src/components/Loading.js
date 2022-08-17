import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="info" />
    </div>
  );
};

export default Loading;
