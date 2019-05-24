import React, { Component } from "react";

import QuoteText from "./Quote_text";
import QuoteAuthor from "./Quote_author";
import Buttons from "./Buttons";
import "./Quote.css";

class Quote extends Component {
  render() {
    return (
      <div id="quote-box">
        <QuoteText />
        <QuoteAuthor />
        <Buttons />
      </div>
    );
  }
}

export default Quote;
