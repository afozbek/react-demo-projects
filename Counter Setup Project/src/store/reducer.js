import * as actions from "../store/actions";

const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
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
    case actions.STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results,
          {
            id: Math.random() * 1000,
            value: state.counter
          }
        ]
      };
    case actions.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
