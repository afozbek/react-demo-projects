import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { keyCodes } from "../../../util"
import {
  removeTodoItem,
  editTodoItem
} from '../../../store/actions';

import CustomCheckbox from "../../CustomCheckbox/CustomCheckbox";
import TodoButton from "./TodoButton";
import EditTodoModal from '../../Modal/EditTodoModal';

const TodoItem = ({ todo , removeTodoItem, editTodoItem }) => {
  const [isModelOpening, setModal] = useState(false);

  const todoItem = useRef();
  const todoLabel = useRef();
  const todoEditInput = useRef();

  const todoKeyDownHandler = (todoId, e) => {
    const key = e.keyCode;
    const { space, enter } = keyCodes
    if (Object.values(keyCodes).indexOf(key) === -1) return;

    if (key === keyCodes.delete) {
      return removeTodoHandler(todoId);
    } else if (key === space && e.target === todoLabel.current) {
      focusEditInput();
    } else if (key === enter && e.target === todoEditInput.current) {
      focusTodoLabel(todo.id)
    }

    return focusElement(e.keyCode);
  }

  const removeTodoHandler = todoId => {
    // TODO: REF EKLENEBİLİR
    const defaultEl = document.querySelector(".m-todo__input");
    focusNextElement(defaultEl);

    return removeTodoItem(todoId);
  }

  const editTodoHandler = todoId => {
    // Open Edit Modal
    setModal(true);
  }

  const closeModal = () => {
    // Save the todo item
    setModal(false);
    todoLabel.current.focus();
  }

  const focusElement = keyCode => {
    const { left, up, down, right } = keyCodes;

    const firstTodoItem = todoItem.current.parentNode.firstChild.firstChild;
    const lastTodoItem = todoItem.current.parentNode.lastChild.firstChild;

    switch (keyCode) {
      case left:
      case up:
        focusPreviousElement(lastTodoItem);
        break;
      case down:
      case right:
        focusNextElement(firstTodoItem);
        break;

      default:
        return;
    }
  };

  const focusPreviousElement = defaultEl => {
    const prevEl = todoItem.current.previousElementSibling;

    let nextFocusEl = prevEl ? prevEl.firstChild : defaultEl;

    nextFocusEl.focus();
  };

  const focusNextElement = defaultEl => {
    const nextEl = todoItem.current.nextElementSibling;

    let nextFocusEl = nextEl ? nextEl.firstChild : defaultEl

    nextFocusEl.focus();
  };

  const doubleClickHandler = () => {
    focusEditInput();
  }

  const onFocusOutHandler = todoId => {
    focusTodoLabel(todoId);
  }

  const focusEditInput = () => {
    todoEditInput.current.classList.add("-editing");
    todoLabel.current.classList.add("-editing");

    todoEditInput.current.value = todo.text;
    todoEditInput.current.focus();
  }

  const focusTodoLabel = todoId => {
    const todoText = todoEditInput.current.value;
    todoEditInput.current.classList.remove("-editing");
    todoLabel.current.classList.remove("-editing");

    editTodoItem(todoId, todoText);
    todoLabel.current.focus();
  }

  return (
    <li
      className={`m-todo__item ${todo.done ? "-done" : ""}`}
      key={todo.id}
      ref={todoItem}
      onKeyDown={e => todoKeyDownHandler(todo.id, e)}
    >
      <CustomCheckbox todoId={todo.id} todoText={todo.text} todoDone={todo.done} />

      <input className="m-todo__editInput" type="text" ref={todoEditInput}
        onBlur={() => onFocusOutHandler(todo.id)} />

      <label className="m-todo__desc" ref={todoLabel}
        tabIndex="0"
        onDoubleClick={doubleClickHandler}
      >
        {todo.text}
      </label>

      <TodoButton todoId={todo.id} todoText={todo.text} clickHandler={editTodoHandler} canEdit>&#9998;</TodoButton>
      <TodoButton todoId={todo.id} todoText={todo.text} clickHandler={removeTodoHandler}>&times;</TodoButton>


      {isModelOpening ? <EditTodoModal closeModal={closeModal} todo={todo}/>:null}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  editTodoItem: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  removeTodoItem,
  editTodoItem,
};

export default connect(null, mapDispatchToProps)(TodoItem);
