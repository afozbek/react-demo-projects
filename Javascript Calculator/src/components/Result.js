import React from "react";

const Result = props => {
  return (
    <div className="result-container">
      <div className="head">{props.head}</div>
      <div id="display" className="result">
        {props.result}
      </div>
    </div>
  );
};

export default Result;
