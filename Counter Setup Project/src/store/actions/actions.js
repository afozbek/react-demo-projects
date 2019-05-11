export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SUBSTRACT = "SUBSTRACT";
export const ADD = "ADD";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const substract = value => {
  return {
    type: SUBSTRACT,
    value: value
  };
};
export const add = value => {
  return {
    type: ADD,
    value: value
  };
};
export const storeResult = ctr => {
  console.log(ctr);
  return {
    type: STORE_RESULT,
    ctr: ctr
  };
};
export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    id: id
  };
};
