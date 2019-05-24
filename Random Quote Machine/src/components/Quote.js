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

  randomColor = () => {
    let colorPatterns = "1234567890ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += colorPatterns[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  getQuote = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          Math.floor(Math.random() * 100)
      )
      .then(res => {
        const { title, body } = res.data;

        const color = this.randomColor();

        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        document.getElementById("tweet-quote").style.color = "#fff";
        document.getElementById("tweet-quote").style.backgroundColor = color;
        document.getElementById("new-quote").style.color = "#fff";
        document.getElementById("new-quote").style.backgroundColor = color;

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
      <div id="quote-box" style={{ color: this.state.backgroundColor }}>
        <QuoteText text={this.state.text} />
        <QuoteAuthor author={this.state.author} />
        <Buttons clicked={this.handleQuoteClick} />
      </div>
    );
  }
}

export default Quote;
