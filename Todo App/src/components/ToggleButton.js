import React from 'react';
import PropTypes from 'prop-types';

const ToggleButton = ({ todoListLength, toggled, toggleAllTodoItems }) => {
  return (
    <button
      aria-label="To select all todos done, please press enter or space."
      className={`o-app__todoToggleBtn ${todoListLength ? "-visible": ""} ${toggled ? "-toggled": ""}`}
      onClick={toggleAllTodoItems}
      >
        ❯
    </button>
  );
}

ToggleButton.propTypes = {
  todoListLength: PropTypes.number.isRequired,
  toggleAllTodoItems: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

export default ToggleButton;
