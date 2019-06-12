import React from "react";

import Length from "./Length/Length";

const Lengths = props => {
  let breakStyle = { marginRight: "2rem" };
  if (window.innerWidth < 600) {
    breakStyle = { marginRight: "0" };
  }
  return (
    <div className="lengths">
      <Length
        labelId="break-label"
        lengthName="Break Length"
        decrementId="break-decrement"
        lengthId="break-length"
        incrementId="break-increment"
        style={breakStyle}
      />
      <Length
        labelId="session-label"
        lengthName="Session Length"
        decrementId="session-decrement"
        lengthId="session-length"
        incrementId="session-increment"
      />
    </div>
  );
};

export default Lengths;
