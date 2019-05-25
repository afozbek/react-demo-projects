import React from "react";
import "./Quote.css";

const quote_text = props => {
  return (
    <div className="quote-text" style={{ color: props.color }}>
      <i className="fas fa-quote-left" />
      <span id="text" dangerouslySetInnerHTML={{ __html: props.quote }} />
    </div>
  );
};

export default quote_text;
