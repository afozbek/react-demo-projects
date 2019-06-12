import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleUp
} from "@fortawesome/free-solid-svg-icons";

import * as actions from "../../../store/actions";

import { connect } from "react-redux";

const VALUE = 1;

const LengthControl = props => {
  const incrementClickHandler = () => {
    if (props.timerStarted) return;
    if (props.isBreak) {
      if (props.breakLength === 60) return;
      props.incrementClickHandler({
        breakLength: props.breakLength,
        isBreak: true,
        value: VALUE
      });
    } else {
      if (props.sessionLength === 60) return;
      props.incrementClickHandler({
        sessionLength: props.sessionLength,
        isBreak: false,
        value: VALUE
      });
    }
  };

  const decrementClickHandler = () => {
    if (props.timerStarted) return;
    if (props.isBreak) {
      if (props.breakLength === 1) return;
      props.decrementClickHandler({
        breakLength: props.breakLength,
        isBreak: true,
        value: VALUE
      });
    } else {
      if (props.sessionLength === 1) return;
      props.decrementClickHandler({
        sessionLength: props.sessionLength,
        isBreak: false,
        value: VALUE
      });
    }
  };

  return (
    <div className="lengths__length__controls">
      <button id={props.decrementId} onClick={decrementClickHandler}>
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          size={window.innerWidth < 600 ? "lg" : "2x"}
        />
      </button>
      <div id={props.lengthId}>
        {props.isBreak ? props.breakLength : props.sessionLength}
      </div>
      <button id={props.incrementId} onClick={incrementClickHandler}>
        <FontAwesomeIcon
          icon={faArrowCircleUp}
          size={window.innerWidth < 600 ? "lg" : "2x"}
        />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  breakLength: state.breakLength,
  sessionLength: state.sessionLength,
  timerStarted: state.timerStarted
});

const mapDispatchToProps = dispatch => ({
  incrementClickHandler: payload => dispatch(actions.incrementLength(payload)),
  decrementClickHandler: payload => dispatch(actions.decrementLength(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LengthControl);
