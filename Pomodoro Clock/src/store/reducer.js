import {
  INCREMENT_LENGTH,
  DECREMENT_LENGTH,
  RESET_CONTENT,
  CALCULATE_REMAINING,
  START_STOP_TIMER
} from "./action-types";

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  label: "Session",
  remMinutes: 25,
  remSeconds: 0,
  timerStarted: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LENGTH:
      return incrementLength(state, action);
    case DECREMENT_LENGTH:
      return decrementLength(state, action);
    case RESET_CONTENT:
      return resetContent(state, action);
    case START_STOP_TIMER:
      return startStopTimer(state, action);
    case CALCULATE_REMAINING:
      return calculateRemaining(state, action);
    default:
      return state;
  }
};

const incrementLength = (state, action) => {
  if (action.payload.isBreak) {
    if (state.label === "Break") {
      return {
        ...state,
        remMinutes: state.breakLength + action.payload.value,
        remSeconds: 0,
        breakLength: state.breakLength + action.payload.value
      };
    } else {
      return {
        ...state,
        breakLength: state.breakLength + action.payload.value
      };
    }
  } else {
    if (state.label === "Session") {
      return {
        ...state,
        remMinutes: state.sessionLength + action.payload.value,
        remSeconds: 0,
        sessionLength: state.sessionLength + action.payload.value
      };
    } else {
      return {
        ...state,
        sessionLength: state.sessionLength + action.payload.value
      };
    }
  }
};

const decrementLength = (state, action) => {
  if (action.payload.isBreak) {
    if (state.label === "Break") {
      return {
        ...state,
        remMinutes: state.breakLength - action.payload.value,
        remSeconds: 0,
        breakLength: state.breakLength - action.payload.value
      };
    } else {
      return {
        ...state,
        breakLength: state.breakLength - action.payload.value
      };
    }
  } else {
    if (state.label === "Session") {
      return {
        ...state,
        remMinutes: state.sessionLength - action.payload.value,
        remSeconds: 0,
        sessionLength: state.sessionLength - action.payload.value
      };
    } else {
      return {
        ...state,
        sessionLength: state.sessionLength - action.payload.value
      };
    }
  }
};

const resetContent = (state, action) => {
  return {
    ...initialState
  };
};

const startStopTimer = (state, action) => {
  return {
    ...state,
    remMinutes: state.remMinutes,
    remSeconds: state.remSeconds,
    timerStarted: !state.timerStarted
  };
};

const calculateRemaining = (state, action) => {
  let remMinutes = action.payload.remMinutes;
  let remSeconds = action.payload.remSeconds;

  if (remSeconds === 0 && remMinutes === 0) {
    if (action.payload.label === "Session") {
      return {
        ...state,
        label: "Break",
        remMinutes: state.breakLength === 1 ? 0 : state.breakLength,
        remSeconds: 59
      };
    } else {
      return {
        ...state,
        label: "Session",
        remMinutes: state.sessionLength === 1 ? 0 : state.sessionLength,
        remSeconds: 59
      };
    }
  } else if (remSeconds === 0) {
    return {
      ...state,
      remMinutes: remMinutes - 1,
      remSeconds: 59
    };
  } else {
    return {
      ...state,
      remSeconds: remSeconds - 1
    };
  }
};

export default rootReducer;
