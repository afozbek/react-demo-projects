import React from "react";

import Button from "./Button";

const Buttons = props => {
  return (
    <div className="buttons-container">
      <Button
        id="Q"
        volume={props.volume}
        buttonId="Heater-1"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      />
      <Button
        id="W"
        volume={props.volume}
        buttonId="Heater-2"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      />
      <Button
        id="E"
        volume={props.volume}
        buttonId="Heater-3"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      />
      <Button
        volume={props.volume}
        id="A"
        buttonId="Heater-6"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      />
      <Button
        id="S"
        volume={props.volume}
        buttonId="Dsc_Oh"
        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      />
      <Button
        id="D"
        volume={props.volume}
        buttonId="Heater-4_1"
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      />
      <Button
        id="Z"
        volume={props.volume}
        buttonId="Kick_n_Hat"
        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      />
      <Button
        id="X"
        volume={props.volume}
        buttonId="RP4_KICK_1"
        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      />
      <Button
        id="C"
        volume={props.volume}
        buttonId="Cev_H2"
        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      />
    </div>
  );
};

export default Buttons;
