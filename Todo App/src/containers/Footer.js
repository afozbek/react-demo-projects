import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import FilterButtonContainer from '../components/FilterButton/FilterButtonContainer';

const Footer = ({ todoList }) => {
  const calculateUncompletedTodoItems = todoList => {
    return todoList.filter(todo => todo.done === false).length;
  }

  const undoneTodoItemCount = calculateUncompletedTodoItems(todoList);
  return todoList.length > 0 ? (
    <footer className="o-app__footer">
      <p className="o-app__itemLeft" tabIndex="0" 
        aria-label={`You have ${undoneTodoItemCount} uncompleted todo items left`}>
        {undoneTodoItemCount} Items Left
      </p>

      <FilterButtonContainer />
    </footer>
  ) : null;
};

const mapStatToProps = state => ({
  todoList : state.todos.todoList,
});

Footer.propTypes = {
  todoList: PropTypes.array.isRequired,
};

export default connect(mapStatToProps)(Footer);
