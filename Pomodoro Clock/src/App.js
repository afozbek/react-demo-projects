import React from "react";

import AnimatedLoad from "./hoc/AnimatedLoad";
import Author from "./components/Author/Author";
import Lengths from "./components/Lengths/Lengths";
import Timer from "./components/Timer/Timer";
import TimerControl from "./components/Timer/TimerControl";

const App = props => {
  return (
    <div className="main-wrapper" id="app">
      <h2 className="title">Pomodoro Clock</h2>
      <Lengths />

      <Timer />

      <TimerControl />

      <Author
        name="Abdullah Furkan Özbek"
        github="https://github.com/afozbek"
      />
    </div>
  );
};

export default AnimatedLoad(App);
