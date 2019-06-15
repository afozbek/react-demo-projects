import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as counterActions from "../../store/actions/counter";
import * as resultActions from "../../store/actions/result";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Results
        </button>
        <ul>
          {this.props.results.map(result => (
            <li
              key={result.id}
              onClick={() => this.props.onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(counterActions.increment()),
    onDecrementCounter: () => dispatch(counterActions.decrement()),
    onAddCounter: () => dispatch(counterActions.add(5)),
    onSubstractCounter: () => dispatch(counterActions.substract(5)),
    onStoreResult: ctr => dispatch(resultActions.storeResult(ctr)),
    onDeleteResult: id => dispatch(resultActions.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
