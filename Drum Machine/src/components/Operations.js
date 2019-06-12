import React from "react";

import Control from "./Operations/Control";
import Display from "./Operations/Display";
import Volume from "./Operations/Volume";
import "../App.css";

const Operations = props => {
  return (
    <div className="operations-container">
      <Control operationName="Power" />
      <Display display="Displaying" />
      <Volume />
      <Control operationName="Bank" />
    </div>
  );
};
export default Operations;
