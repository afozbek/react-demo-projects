import React from "react";

const Buttons = props => {
  const styles = {
    clearStyle: { background: "#ac3939" },
    operatorStyle: { background: "#666666" },
    equalsStyle: { background: "#004466" }
  };
  const { clearStyle, operatorStyle, equalsStyle } = styles;
  return (
    <div className="buttons-container">
      <button
        id="clear"
        value="AC"
        className="grid-item grid-item-clear"
        style={clearStyle}
        onClick={props.clear}
      >
        AC
      </button>
      <button
        id="divide"
        value="/"
        style={operatorStyle}
        onClick={props.operations}
      >
        /
      </button>
      <button
        id="multiply"
        value="*"
        style={operatorStyle}
        onClick={props.operations}
      >
        x
      </button>
      <button id="seven" value="7" onClick={props.numbers}>
        7
      </button>
      <button id="eight" value="8" onClick={props.numbers}>
        8
      </button>
      <button id="nine" value="9" onClick={props.numbers}>
        9
      </button>
      <button
        id="subtract"
        value="-"
        style={operatorStyle}
        onClick={props.operations}
      >
        -
      </button>
      <button id="four" value="4" onClick={props.numbers}>
        4
      </button>
      <button id="five" value="5" onClick={props.numbers}>
        5
      </button>
      <button id="six" value="6" onClick={props.numbers}>
        6
      </button>
      <button
        id="add"
        value="+"
        style={operatorStyle}
        onClick={props.operations}
      >
        +
      </button>
      <button id="one" value="1" onClick={props.numbers}>
        1
      </button>
      <button id="two" value="2" onClick={props.numbers}>
        2
      </button>
      <button id="three" value="3" onClick={props.numbers}>
        3
      </button>
      <button
        id="zero"
        value="0"
        className="grid-item-zero"
        onClick={props.numbers}
      >
        0
      </button>
      <button id="decimal" value="." onClick={props.decimal}>
        .
      </button>
      <button
        id="equals"
        value="="
        className="grid-item-equal"
        style={equalsStyle}
        onClick={props.result}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
