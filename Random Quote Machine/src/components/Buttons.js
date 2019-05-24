import React from "react";

import Button from "./Button";
import "./Quote.css";

const buttons = props => {
  return (
    <div className="buttons">
      <Button
        title="share_content"
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        backgroundColor={props.color}
      >
        <i className="fab fa-twitter" />
      </Button>
      <Button
        isButton
        id="new-quote"
        clicked={props.clicked}
        backgroundColor={props.color}
      >
        New Quote
      </Button>
    </div>
  );
};

export default buttons;
