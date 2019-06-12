import React from "react";

import LengthControl from "./LengthControl";

const Length = props => {
  return (
    <div className="lengths__length" style={props.style ? props.style : null}>
      <div id={props.labelId}>{props.lengthName}</div>
      <LengthControl
        isBreak={props.style ? true : false}
        decrementId={props.decrementId}
        lengthId={props.lengthId}
        incrementId={props.incrementId}
      />
    </div>
  );
};

export default Length;
