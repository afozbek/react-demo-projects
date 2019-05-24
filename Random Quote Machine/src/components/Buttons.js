import React from "react";
import "./Quote.css";

const buttons = props => {
  return (
    <div className="buttons">
      <a
        className="button"
        title="share_content"
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
      >
        <i className="fab fa-twitter" />
      </a>
      <button className="button" id="new-quote" onClick={props.clicked}>
        New Quote
      </button>
    </div>
  );
};

export default buttons;
