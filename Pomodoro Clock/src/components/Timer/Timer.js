import React from "react";
import { connect } from "react-redux";

import * as bip from "../../assets/BeepSound.wav";
import { calculateRemaining } from "../../store/actions";
import useInterval from "../../hooks/useInterval";

const Timer = props => {
  // ! My Time Interval
  let style = null;
  useInterval(
    () => {
      props.calculateRemaining({
        remMinutes: props.remMinutes,
        remSeconds: props.remSeconds,
        label: props.label
      });
    },
    props.timerStarted ? 1000 : null
  );

  if (props.remMinutes === 0 && props.remSeconds < 60) {
    style = { color: "rgb(165,13,13)" };
  }
  if (props.remMinutes === 0 && props.remSeconds === 0) {
    let audio = new Audio(bip);
    if (audio) {
      audio.play();
    }
  }
  return (
    <div className="timer">
      <div className="timer-wrapper" style={style}>
        <div id="timer-label">{props.label}</div>
        <div id="time-left">
          <span>
            {props.remMinutes < 10 ? "0" + props.remMinutes : props.remMinutes}
          </span>
          <span> : </span>
          <span>
            {props.remSeconds < 10 ? "0" + props.remSeconds : props.remSeconds}
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  label: state.label,
  remMinutes: state.remMinutes,
  remSeconds: state.remSeconds,
  timerStarted: state.timerStarted
});

// * I must dispatch this event
const mapDispatchToProps = dispatch => ({
  calculateRemaining: payload => dispatch(calculateRemaining(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
