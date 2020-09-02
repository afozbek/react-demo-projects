import {
  ADD_TODO_ITEM,
  EDIT_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  CLEAR_COMPLETED_TODO_ITEMS,
  TOGGLE_ALL_TODO_ITEMS,
  INIT_TODO_STATE,
  CLEAR_TODO_STATE
} from "./types";

// TODO OPERATIONS

const initTodoListState = () => ({
  type: INIT_TODO_STATE
});

const clearTodoState = () => ({
  type: CLEAR_TODO_STATE
});

const addTodoItem = todoText => ({
  type: ADD_TODO_ITEM,
  todoText
});

const editTodoItem = (todoId, todoText) => ({
  type: EDIT_TODO_ITEM,
  todoId,
  todoText
});

const removeTodoItem = todoId => ({
  type: REMOVE_TODO_ITEM,
  todoId
});

const toggleTodoItem = todoId => ({
  type: TOGGLE_TODO_ITEM,
  todoId
});

const clearCompletedTodoItems = () => ({
  type: CLEAR_COMPLETED_TODO_ITEMS
});

const toggleAllTodoItems = () => ({
  type: TOGGLE_ALL_TODO_ITEMS
});

export {
  initTodoListState,
  clearTodoState,
  addTodoItem,
  editTodoItem,
  removeTodoItem,
  toggleTodoItem,
  clearCompletedTodoItems,
  toggleAllTodoItems
};