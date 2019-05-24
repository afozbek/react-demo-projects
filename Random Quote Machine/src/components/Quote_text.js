import React from "react";
import "./Quote.css";

const quote_text = props => {
  return (
    <div id="text">
      <i className="fas fa-quote-left" />
      <span>
        {props.text}
        {/* Life is what happens to you while you’re busy making other plans. */}
      </span>
    </div>
  );
};

export default quote_text;
