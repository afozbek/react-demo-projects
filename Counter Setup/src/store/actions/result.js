import { STORE_RESULT, DELETE_RESULT } from "./actionsTypes";

export const saveResult = ctr => {
  return {
    type: STORE_RESULT,
    ctr: ctr
  };
};

export const storeResult = ctr => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(ctr));
    }, 2000);
  };
};
export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id: id
  };
};
