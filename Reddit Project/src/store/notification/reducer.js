import { NOTIFY, CLEAR_NOTIFY } from './types';

const initialState = {
  showNotification: false,
  text: '',
  displayTime: 2000,
  hasError: false,
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY:
      return notify(state, action.payload);

    case CLEAR_NOTIFY:
      return clearNotify();

    default:
      return state;
  }
};

const notify = (state, obj) => {
  return {
    ...state,
    showNotification: true,
    text: obj.text,
    hasError: obj.hasError || false,
  };
};

const clearNotify = () => {
  return initialState;
};
