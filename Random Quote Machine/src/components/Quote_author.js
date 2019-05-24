import React from "react";
import "./Quote.css";

const quote_author = props => {
  return (
    <div className="quote-author">
      <span id="author">- {props.author} </span>
    </div>
  );
};

export default quote_author;
