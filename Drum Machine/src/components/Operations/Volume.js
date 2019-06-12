import React, { useContext } from "react";

import "../../App.css";
import VolumeContext from "../../volume-context";

const Volume = props => {
  const volumeContext = useContext(VolumeContext);

  return (
    <div className="volume">
      <input
        className="slider"
        value={volumeContext.volume}
        type="range"
        onChange={volumeContext.volumeChangeHander}
        step="0.01"
        min="0"
        max="1"
      />
    </div>
  );
};

export default Volume;
