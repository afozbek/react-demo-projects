import React, { Component } from "react";
import axios from "axios";

import QuoteText from "./Quote_text";
import QuoteAuthor from "./Quote_author";
import Buttons from "./Buttons";
import "./Quote.css";

class Quote extends Component {
  state = {
    text: "",
    author: "",
    color: "",
    paragraph: ""
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
      .get("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand")
      .then(res => {
        // title->author | content->speech
        const { title, content } = res.data[0];

        const color = this.randomColor();

        // Change body's color dynmicly by reaching DOM
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        let regex = /(<p>|<\/p>)/g;

        let newContent = content.replace(regex, "");

        this.setState({
          text: newContent,
          author: title,
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
