import React from "react";
import * as math from "mathjs";

import Result from "./components/Result";
import Buttons from "./components/Buttons";
import Author from "./components/Author";
import "./App.css";

const isOperator = /[*+\-/]/,
  endsWithOperator = /[*+\-/]$/,
  startsWithOperator = /^[*+\-/]/,
  startsWithZero = /^0/;

class Calculator extends React.Component {
  state = {
    currVal: "0",
    prevVal: "0",
    maxPrevVal: "0",
    operations: [],
    isEvaluated: false
  };

  maxDigitWarning = () => {
    this.setState({
      prevVal: "MAX DIGIT LIMIT",
      maxPrevVal: this.state.prevVal
    });
    setTimeout(() => {
      this.setState({
        prevVal: this.state.maxPrevVal
      });
    }, 1000);
  };

  handleClear = () => {
    this.setState({
      currVal: "0",
      prevVal: "0",
      maxPrevVal: "0",
      operations: [],
      isEvaluated: false
    });
  };

  handleNumbers = e => {
    let currVal_ = this.state.currVal;
    let prevVal_ = this.state.prevVal;
    let value = e.target.value;

    if (!prevVal_.includes("DIGIT")) {
      if (prevVal_.length > 10) {
        this.maxDigitWarning();
      } else if (this.state.isEvaluated) {
        this.setState({
          currVal: value,
          prevVal: value,
          operations: [],
          isEvaluated: false
        });
      } else {
        if (this.state.prevVal.includes(".")) {
          this.setState({
            currVal: currVal_ + value,
            prevVal: prevVal_ + value
          });
        } else {
          let currVal = currVal_.replace(startsWithZero, "");
          let prevVal = prevVal_.replace(startsWithZero, "");

          if (prevVal_ === "0" && value === "0") return;

          if (isOperator.test(prevVal)) {
            prevVal = value;
          } else {
            prevVal += value;
          }

          this.setState({
            currVal: currVal + value,
            prevVal: prevVal
          });
        }
      }
    }
  };

  handleOperations = e => {
    let currVal = this.state.currVal;
    let prevVal = this.state.prevVal;
    let value = e.target.value;
    let operations = [...this.state.operations];

    if (this.state.isEvaluated) {
      this.setState({
        currVal: prevVal + value,
        prevVal: value,
        operations: [value],
        isEvaluated: false
      });
    } else {
      if (isOperator.test(prevVal)) {
        let currVal_ = currVal.replace(endsWithOperator, value);
        let slicedOps = operations.slice(0, operations.length - 1);
        this.setState({
          currVal: currVal_,
          prevVal: value,
          operations: [...slicedOps, value]
        });
      } else {
        if (prevVal.includes("DIGIT")) {
          return;
        }

        this.setState({
          currVal: currVal + value,
          prevVal: value,
          operations: [...operations, value]
        });
      }
    }
  };

  handleResult = () => {
    let currVal = this.state.currVal;

    if (this.state.isEvaluated) {
      return;
    }

    if (startsWithOperator.test(currVal) && endsWithOperator.test(currVal)) {
      let sliced = currVal.slice(0, currVal.length - 1);
      if (sliced[0] === "-" || sliced[0] === "+") {
        let result = math.eval(sliced);
        this.setState({
          currVal: sliced + "=" + String(result),
          prevVal: String(result),
          isEvaluated: true
        });
      } else {
        return;
      }
    } else if (startsWithOperator.test(currVal)) {
      let sliced = currVal.slice();
      if (sliced[0] === "-" || sliced[0] === "+") {
        let result = math.eval(sliced);
        this.setState({
          currVal: sliced + "=" + String(result),
          prevVal: String(result),
          isEvaluated: true
        });
      }
    } else if (endsWithOperator.test(currVal)) {
      let sliced = currVal.slice(0, currVal.length - 1);
      let result = math.eval(sliced);
      this.setState({
        currVal: sliced + "=" + String(result),
        prevVal: String(result),
        isEvaluated: true
      });
    } else {
      let sliced = currVal.slice();
      let result = math.eval(sliced);

      this.setState({
        currVal: sliced + "=" + String(result),
        prevVal: String(result),
        isEvaluated: true
      });
    }
  };

  handleDecimal = e => {
    if (this.state.isEvaluated) {
      this.setState({
        currVal: "0" + e.target.value,
        prevVal: "0" + e.target.value,
        isEvaluated: false
      });
    } else {
      if (this.state.prevVal.includes(".")) {
        return;
      } else {
        if (this.state.prevVal.includes("DIGIT")) {
          return;
        }
        this.setState({
          currVal: this.state.currVal + e.target.value,
          prevVal: this.state.prevVal + e.target.value
        });
      }
    }
  };

  render() {
    return (
      <div id="container" className="container">
        <div className="calculator-container">
          <Result head={this.state.currVal} result={this.state.prevVal} />
          <Buttons
            clear={this.handleClear}
            numbers={this.handleNumbers}
            operations={this.handleOperations}
            decimal={this.handleDecimal}
            result={this.handleResult}
          />
        </div>
        <Author
          name="Abdullah Furkan Özbek"
          github="https://github.com/afozbek"
        />
      </div>
    );
  }
}

export default Calculator;
