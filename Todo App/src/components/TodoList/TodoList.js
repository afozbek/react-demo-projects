import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './TodoItem/TodoItem';

const TodoList = ({ todoList, activeFilter }) => {
  const filterTodoList = (filterType) => {
    switch (filterType) {
      case "ALL":
      default:
        return todoList;
      case "ACTIVE":
        return todoList.filter(todo => todo.done === false);
      case "COMPLETED":
        return todoList.filter(todo => todo.done === true);
    }
  };

  const todoItems = filterTodoList(activeFilter).map(todo => <Todo key={todo.id} todo={todo} /> );

  return todoItems.length > 0 ? (
    <ul className="m-todo__list">
      {todoItems}
    </ul>
  ) : null;
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  todoList: state.todos.todoList,
  activeFilter: state.activeFilter
});

export default connect(mapStateToProps)(TodoList);