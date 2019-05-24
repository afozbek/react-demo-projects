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

  // Generate Random color
  randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get Quotes
  getQuote = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          Math.floor(Math.random() * 100)
      )
      .then(res => {
        const { title, body } = res.data;

        const color = this.randomColor();

        // Change body's color dynmicly by reaching DOM
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        this.setState({
          text: body,
          author: title.slice(1, 10),
          color: color
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getQuote();
  }

  handleQuoteClick = () => {
    this.getQuote();
  };

  render() {
    return (
      <div id="quote-box" style={{ color: this.state.backgroundColor }}>
        <QuoteText text={this.state.text} />
        <QuoteAuthor author={this.state.author} />
        <Buttons clicked={this.handleQuoteClick} color={this.state.color} />
      </div>
    );
  }
}

export default Quote;
