import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList/TodoList';
import TodoInput from '../components/TodoList/TodoItem/TodoInput';
import Footer from './Footer';

import { toggleAllTodoItems } from "../store/actions";
import ToggleButton from '../components/ToggleButton';

const Main = ({ todoListLength, toggleAllTodoItems, toggled }) => {

  const toggleButtonsProps = { todoListLength, toggled, toggleAllTodoItems };

  return (
    <main className="o-app__main">
      <ToggleButton {...toggleButtonsProps} />
      <TodoInput />
      <TodoList />
      <Footer />
    </main>
  )
};

Main.propTypes = {
  todoListLength: PropTypes.number.isRequired,
  toggleAllTodoItems: PropTypes.func.isRequired,
  toggled: PropTypes.bool
};

const mapStateToProps = state => ({
  toggled: state.todos.allTodosSelected
});

const mapDispatchToProps = {
  toggleAllTodoItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
