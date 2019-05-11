import * as actions from "../actions/actions";

const initialState = {
  counter: 0
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actions.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
    default:
      return state;
  }
};

export default counterReducer;
