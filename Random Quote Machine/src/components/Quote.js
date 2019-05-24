import React, { Component } from "react";
import axios from "axios";

import QuoteText from "./Quote_text";
import QuoteAuthor from "./Quote_author";
import Buttons from "./Buttons";
import "./Quote.css";

class Quote extends Component {
  state = {
    text: "",
    author: ""
  };
  getQuote = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          Math.floor(Math.random() * 100)
      )
      .then(res => {
        const { title, body } = res.data;
        this.setState({
          text: body,
          author: title.slice(1, 10)
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getQuote();
  }

  handleQuoteClick = () => {
    console.log("Clickedd");
    this.getQuote();
  };

  render() {
    return (
      <div id="quote-box">
        <QuoteText text={this.state.text} />
        <QuoteAuthor author={this.state.author} />
        <Buttons clicked={this.handleQuoteClick} />
      </div>
    );
  }
}

export default Quote;
