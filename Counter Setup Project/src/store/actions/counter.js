import { INCREMENT, DECREMENT, SUBSTRACT, ADD } from "./actionsTypes";

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
