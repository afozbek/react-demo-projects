import React, { Component } from "react";
import axios from "axios";

import QuoteText from "./Quote_text";
import QuoteAuthor from "./Quote_author";
import Buttons from "./Buttons";
import "./Quote.css";

class Quote extends Component {
  state = {
    color: "rgb(243, 156, 18)",
    quotesData: [],
    quote: "Güzel bir alıntı için aşağıdaki butona tıklayınız 😉",
    author: "Abdullah Furkan Özbek"
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
  getQuotes = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(res => {
        const quotesData = [...res.data.quotes];
        console.log(quotesData);

        const color = this.randomColor();

        // Change body's color dynmicly by reaching DOM
        document.body.style.color = color;
        document.body.style.backgroundColor = color;

        console.log("Setting Quotes");
        this.setState({
          quotesData: quotesData,
          color: color
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    if (this.state.quotesData.length > 0) {
      return;
    } else {
      this.getQuotes();
    }
  }

  handleQuoteClick = () => {
    let randomIndex = Math.floor(Math.random() * 100);
    let { quote, author } = this.state.quotesData[randomIndex];

    const color = this.randomColor();

    // Change body's color dynmicly by reaching DOM
    document.body.style.color = color;
    document.body.style.backgroundColor = color;

    this.setState({
      quote: quote,
      author: author,
      color: color
    });
  };

  render() {
    return (
      <div id="quote-box" style={{ color: this.state.backgroundColor }}>
        <QuoteText quote={this.state.quote} color={this.state.color} />

        <QuoteAuthor author={this.state.author} color={this.state.color} />
        <Buttons
          clicked={this.handleQuoteClick}
          color={this.state.color}
          quote={this.state.quote}
          author={this.state.author}
        />
      </div>
    );
  }
}
export default Quote;
