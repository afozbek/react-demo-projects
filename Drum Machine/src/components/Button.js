import React from "react";

import "../App.css";

const Button = props => {
  const clickHandler = e => {
    const audioElement = document.getElementById(props.id);
    audioElement.volume = props.volume;
    audioElement.play();
    document.getElementById("display").innerHTML = props.buttonId;
  };

  return (
    <div className="drum-pad" id={props.buttonId} onClick={clickHandler}>
      <audio className="clip" id={props.id} src={props.src} />
      {props.id}
    </div>
  );
};

export default Button;
