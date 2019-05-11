import * as actions from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(result => result.id !== action.id);
  return updateObject(state, { results: updatedArray });
};

const storeResult = (state, action) => {
  return updateObject(state, {
    results: state.results.concat({
      id: Math.random() * 1000,
      value: action.ctr
    })
  });
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return storeResult(state, action);

    case actions.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }
};

export default resultReducer;
