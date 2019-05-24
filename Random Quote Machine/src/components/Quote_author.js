import React from "react";
import "./Quote.css";

const quote_author = props => {
  return (
    <div id="author">
      - {props.author}
      {/* John Lennon */}
    </div>
  );
};

export default quote_author;
