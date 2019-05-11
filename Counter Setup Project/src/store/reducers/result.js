import * as actions from "../actions/actions";

const initialState = {
  results: []
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return {
        ...state,
        results: [
          ...state.results,
          {
            id: Math.random() * 1000,
            value: action.ctr
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

export default resultReducer;
