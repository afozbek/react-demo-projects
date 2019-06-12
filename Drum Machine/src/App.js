import React, { useState, useEffect } from "react";

import Buttons from "./components/Buttons";
import Operations from "./components/Operations";
import VolumeContext from "./volume-context";
import "./App.css";

const App = props => {
  const [volume, setVolume] = useState(0.5);
  const keys = {
    81: "Q",
    87: "W",
    69: "E",
    65: "A",
    83: "S",
    68: "D",
    90: "Z",
    88: "X",
    67: "C"
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed);
  }, []);

  const handleKeyPressed = e => {
    const keyCode = e.keyCode;
    if (keys[keyCode]) {
      const audioElement = document.getElementById(keys[keyCode]);
      audioElement.volume = volume;
      audioElement.play();
      document.getElementById("display").innerHTML =
        keys[keyCode] + "'na basıldı";
    } else {
      return;
    }
  };

  const volumeChangeHander = e => {
    let updatedVolume = Math.floor(e.target.value * 100);
    document.getElementById("display").innerHTML = "Volume: " + updatedVolume;
    setVolume(e.target.value);
  };

  return (
    <div id="drum-machine">
      <VolumeContext.Provider
        value={{ volume: volume, volumeChangeHander: volumeChangeHander }}
      >
        <Buttons volume={volume} />
        <Operations />
      </VolumeContext.Provider>
    </div>
  );
};

export default App;
