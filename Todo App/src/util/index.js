import { LOCALSTORAGE_TODO_STATE } from "../store/actions/types";

export const keyCodes = {
  enter: 13,
  space: 32,
  esc: 27,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46
};

export const getLocalStorageTodoState = (stringify=false) => {
  const todoState = localStorage.getItem(LOCALSTORAGE_TODO_STATE);
  const newState = todoState ? stringify ? JSON.stringify(todoState) : JSON.parse(todoState) : [];

  return newState;
};

export const setToLocalStorage = newState => {
  localStorage.setItem(LOCALSTORAGE_TODO_STATE, JSON.stringify(newState));
};