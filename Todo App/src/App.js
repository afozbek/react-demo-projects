import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Main from "./containers/Main";
import InfoMessage from "./components/InfoMessage";
import { initTodoListState } from "./store/actions";
import { getLocalStorageTodoState } from "./util";

class App extends React.Component {
  state = {
    downloadLink: ""
  };

  componentDidMount() {
    this.props.initTodoListState();
    const downloadLink = `data:application/json;charset=utf-8,${encodeURIComponent(getLocalStorageTodoState(true))}`

    this.setState({ downloadLink });

    // TODO: REF EKLENİCEK
    document.querySelector(".m-todo__input").focus();
  }

  render() {
    return (
      <div className="o-app">
        <h1 className="o-app__header">Today's TODO's</h1>
        <div className="m-todo">
          <Main todoListLength={this.props.todoList.length}/>

          <InfoMessage />
        </div>
        {
        this.props.todoList.length > 0 ?
          <a className="o-app__downloadDataBtn"
            aria-label="If you want to download your data please press enter"
            href={this.state.downloadLink}
            download="data.json"
          >
          Download Your Data
          </a>
          : null
        }
      </div>
    );
  }
}

App.propTypes = {
  todoList: PropTypes.array.isRequired,
  activeFilter: PropTypes.string.isRequired,
  initTodoListState: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todoList: state.todos.todoList,
  activeFilter: state.activeFilter
});

const mapDispatchToProps = {
  initTodoListState
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
