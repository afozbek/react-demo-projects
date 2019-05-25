import React from "react";

import Button from "./Button";
import "./Quote.css";

const buttons = props => {
  return (
    <div className="buttons">
      <Button
        title="share_content"
        id="tweet-quote"
        backgroundColor={props.color}
        quote={props.quote}
        author={props.author}
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
