import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import FilterButton from './FilterButton';

import { clearCompletedTodoItems, changeActiveFilter } from "../../store/actions";

const FilterButtonContainer = ({ clearTodos, changeFilter }) => {
  const filterButtonContainer = useRef();

  const setActiveFilter = e => {
    setSelectedData(e.target);
    const filter = e.target.dataset.filter;
    changeFilter(filter);
  }

  const setSelectedData = target => {
    const buttonContainer = Array.from(filterButtonContainer.current.children)
    buttonContainer
      .forEach(btn => {
        if (btn === target) {
          btn.dataset.selected = true
        } else {
          btn.dataset.selected = false
        }
    });
  }

  const setSelectedDataAfterClear = ({ target }) => {
    const buttonContainer = Array.from(filterButtonContainer.current.children)
    buttonContainer
      .forEach(btn => {
        if (btn === target) {
          btn.dataset.selected = false;
          filterButtonContainer.current.firstChild.dataset.selected = true
        } else {
          btn.dataset.selected = false;
        }
    });

    clearTodos(target);
  }

  return (
    <div className="o-app__filterBtnContainer" ref={filterButtonContainer}>
      <FilterButton filter="ALL" filterClickHandler={setActiveFilter}>All</FilterButton>
      <FilterButton filter="ACTIVE" filterClickHandler={setActiveFilter}>Active</FilterButton>
      <FilterButton filter="COMPLETED" filterClickHandler={setActiveFilter}>Completed</FilterButton>
      <FilterButton ariaLabel="Clear Completed Todos" filter="ALL" filterClickHandler={setSelectedDataAfterClear}>Clear Completed</FilterButton>
    </div>
  );
}

FilterButtonContainer.propTypes = {
  clearTodos: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  clearTodos: target => {
    const filter = target.dataset.filter;
    dispatch(clearCompletedTodoItems());
    dispatch(changeActiveFilter(filter));

    // TODO: REF EKLENEBİLİR
    document.querySelector(".m-todo__input").focus();
  },
  changeFilter: filter => dispatch(changeActiveFilter(filter))
})

export default connect(null, mapDispatchToProps)(FilterButtonContainer)
