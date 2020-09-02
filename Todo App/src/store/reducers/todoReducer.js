import {
  INIT_TODO_STATE,
  CLEAR_TODO_STATE,
  ADD_TODO_ITEM, REMOVE_TODO_ITEM,
  TOGGLE_TODO_ITEM,
  CLEAR_COMPLETED_TODO_ITEMS,
  TOGGLE_ALL_TODO_ITEMS,
  EDIT_TODO_ITEM,
  LOCALSTORAGE_TODO_STATE
} from "../actions/types";

import { getLocalStorageTodoState, setToLocalStorage } from "../../util";


const initialState = {
  todoList: [],
  allTodosSelected: false
};

// TODO REDUCER
const todos = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TODO_STATE:
      return initTodoState(state);
    case CLEAR_TODO_STATE:
      return clearTodoState(state);
    case ADD_TODO_ITEM:
      return addTodoItem(state, action.todoText);
    case EDIT_TODO_ITEM:
      return editTodoItem(state, action.todoId, action.todoText);
    case REMOVE_TODO_ITEM:
      return removeTodoItem(state, action.todoId);
    case TOGGLE_TODO_ITEM:
      return toggleTodoItem(state, action.todoId);
    case CLEAR_COMPLETED_TODO_ITEMS:
      return clearCompletedTodoItems(state);
    case TOGGLE_ALL_TODO_ITEMS:
      return toggleAllTodoItems(state);
    default:
      return state;
  }
}

const initTodoState = state => {
  const newState = getLocalStorageTodoState();

  if(newState.length === 0) {
    return initialState;
  }

  return {
    ...state,
    todoList: [...newState.todoList],
    allTodosSelected: newState.allTodosSelected
  };
}

const clearTodoState = state => {
  localStorage.removeItem(LOCALSTORAGE_TODO_STATE);
  state = initialState;

  return state;
}

const addTodoItem = (state, todoText) => {
    const uniqId = Math.ceil(Math.random() * 1000000);
    const todoObj = {
      id: uniqId,
      text: todoText.trim(),
      done: false
    };

    const newState = {
      ...state,
      todoList: state.todoList.concat(todoObj)
    }

    setToLocalStorage(newState);

    return newState;
}

const editTodoItem = (state, todoId, todoText) => {
  const changedTodoList = state.todoList.map(todo => {
    if (todo.id === todoId){
      return {
        ...todo,
        text: todoText
      }
    }
    return todo;
  });

  const newState = {
    ...state,
    todoList: changedTodoList
  };

  setToLocalStorage(newState);

  return newState;
}

const removeTodoItem = (state, todoId) => {
  const filteredTodoItems = state.todoList.filter(todo => {
    return todo.id !== todoId;
  });

  const newState = {
    ...state,
    todoList: filteredTodoItems
  }

  setToLocalStorage(newState);

  return newState;
}

const toggleTodoItem = (state, todoId) => {
  const newTodoList = state.todoList.map(todo => {
    if (todo.id === todoId) {
      return {
        ...todo,
        done: !todo.done
      }
    }
    return todo;
  });

  const newState = {
    ...state,
    todoList: newTodoList
  }

  setToLocalStorage(newState);

  return newState;
}

const clearCompletedTodoItems = state => {
  const remainingTodoItems = state.todoList.filter(todo => todo.done === false);

  const newState = {
    ...state,
    todoList: remainingTodoItems
  };

  setToLocalStorage(newState);
  return newState;
}

const toggleAllTodoItems = state => {
  const allTodosSelected = state.allTodosSelected;
  const selectedAllTodoItems = state.todoList.map(todo => {
    return {
      ...todo,
      done: !allTodosSelected
    };
  });

  const newState = {
    ...state,
    todoList: selectedAllTodoItems,
    allTodosSelected: !allTodosSelected
  };

  setToLocalStorage(newState);

  return newState;
}

export default todos;
