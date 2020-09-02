import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { editTodoItem } from  "../../store/actions"
import { keyCodes } from "../../util";

const EditTodoModal = ({ closeModal, todo, editTodoItem }) => {
  const todoInput = useRef();
  const modal = useRef();
  const { esc, enter } = keyCodes;

  useEffect(() => {
    todoInput.current.value = todo.text;
    todoInput.current.focus();
  });

  const overlayClickHandler = e => {
    if (e.target === modal.current) {
      closeModal();
    }
  }

  const modalKeyDownHandler = e => {
    const key = e.keyCode;

    switch (key) {
      case esc:
        closeModal();
        break;
      case enter:
        editTodoItem(todo.id, todoInput.current.value);
        closeModal();
        break;
      default:
        return;
    }
  }

  const saveTodoItem = () => {
    // Save the editting todo item
    editTodoItem(todo.id, todoInput.current.value);

    closeModal();
  }

  return (
    <div className="m-modal" role="dialog" ref={modal} onKeyDown={modalKeyDownHandler} onClick={overlayClickHandler}>
      <div className="m-modal__container" >
        <h1 className="m-modal__header">Edit Your Todo Item</h1>
        <div className="m-modal__body">
          <p className="m-modal__infoMsg" tabIndex="0">You can easily edit your todo item below.</p>
          <input type="text" className="m-modal__todoInput"
            placeholder="What do you want to do today..."
            ref={todoInput}
          />
          <button className="m-modal__updateBtn"
            aria-label="To save your todo item press enter or space key."
            onClick={saveTodoItem}>Save</button>
          <button className="m-modal__closeBtn"
            aria-label="You can close dialog from here by pressing enter or space key."
            onClick={closeModal}>
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

EditTodoModal.propTypes = {
  todo: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  editTodoItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  editTodoItem
}

export default connect(null, mapDispatchToProps)(EditTodoModal);
