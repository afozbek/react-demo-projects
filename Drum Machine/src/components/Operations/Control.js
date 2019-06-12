import React from "react";

import "../../App.css";

const Control = props => {
  return (
    <div className="control">
      <p>{props.operationName}</p>
      <div className="status-wrapper">
        <div className="status">OFF</div>
      </div>
    </div>
  );
};

export default Control;
