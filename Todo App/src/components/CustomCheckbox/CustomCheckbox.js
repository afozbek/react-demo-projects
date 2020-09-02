import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

import { toggleTodoItem } from "../../store/actions"

const CustomCheckbox = ({ todoDone, todoId, todoText, toggleTodoItem }) => {
  return (
    <React.Fragment>
      <input
        className={`m-todo__checkbox ${todoDone ? "-done": ""}`}
        type="checkbox"
        name="todoCheckbox"
        id={`todoCheckbox-${todoId}`}
        aria-label={`${todoText}`}
        onClick={() => toggleTodoItem(todoId)}
      />

      <label
        className="m-todo__label"
        id="todoLabel"
        htmlFor={`todoCheckbox-${todoId}`}
        data-content="✔︎"
      ></label>
    </React.Fragment>
  )
}

CustomCheckbox.propTypes = {
  todoDone: PropTypes.bool.isRequired,
  todoId: PropTypes.number.isRequired,
  todoText: PropTypes.string.isRequired,
  toggleTodoItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  toggleTodoItem
}

export default connect(null, mapDispatchToProps)(CustomCheckbox);
