import { CHANGE_ACTIVE_FILTER } from "../actions/types";
// FILTER REDUCER
const activeFilterReducer = (state = "ALL", action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_FILTER:
      state = action.filter
      return state;
    default:
      return state
  }
};

export default activeFilterReducer;