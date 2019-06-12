import {
  INCREMENT_LENGTH,
  DECREMENT_LENGTH,
  RESET_CONTENT,
  CALCULATE_REMAINING,
  START_STOP_TIMER
} from "./action-types";

export const incrementLength = payload => {
  return {
    type: INCREMENT_LENGTH,
    payload
  };
};

export const decrementLength = payload => {
  return {
    type: DECREMENT_LENGTH,
    payload
  };
};

export const resetContent = () => {
  return {
    type: RESET_CONTENT
  };
};

export const calculateRemaining = payload => {
  return {
    type: CALCULATE_REMAINING,
    payload
  };
};

export const startStopTimer = () => {
  return {
    type: START_STOP_TIMER
  };
};
