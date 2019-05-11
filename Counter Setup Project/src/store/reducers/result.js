import * as actions from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: Math.random() * 1000,
          value: action.ctr
        })
      });

    case actions.DELETE_RESULT:
      const updatedArray = state.results.filter(
        result => result.id !== action.id
      );
      return updateObject(state, { results: updatedArray });

    default:
      return state;
  }
};

export default resultReducer;
