import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodoItem } from '../../../store/actions';
import { keyCodes } from '../../../util';

const TodoInput = ({ addTodoItem }) => {
  const inputKeyDownHandler = ({ target, keyCode }) => {
    // Simple validation. Delete if you want :)
    if (
      keyCode !== keyCodes.enter ||
      target.value.length < 2 ||
      target.value.trim() === ''
    )
      return;

    addTodoItem(target.value.trim());

    target.value = '';
  };

  return (
    <input
      className="m-todo__input"
      onKeyDown={inputKeyDownHandler}
      aria-label="Please enter your todo item"
      name="todo"
      id="todoInput"
      type="text"
      placeholder="What do you want to do today... "
    />
  );
};

TodoInput.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addTodoItem,
};

export default connect(null, mapDispatchToProps)(TodoInput);
