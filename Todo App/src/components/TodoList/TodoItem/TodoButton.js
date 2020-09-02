import React from 'react'
import PropTypes from 'prop-types'


const TodoButton = ({ todoId, todoText, clickHandler, canEdit, children }) => {

  return (
    <button
        className={`m-todo__btn ${canEdit ? "-edit": "-remove"}`}
        aria-label={`Do you want to delete this todo? ${todoText}`}
        onClick={() => clickHandler(todoId)}
      >
        {children}
      </button>
  )
}

TodoButton.propTypes = {
  todoId: PropTypes.number.isRequired,
  todoText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  canEdit: PropTypes.bool,
}

export default TodoButton;
