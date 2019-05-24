import React from "react";
import "./Quote.css";

const quote_text = props => {
  return (
    <div className="quote-text">
      <i className="fas fa-quote-left" />
      <span id="text" dangerouslySetInnerHTML={{ __html: props.text }} />
      {/* Life is what happens to you while you’re busy making other plans. */}
    </div>
  );
};

export default quote_text;
