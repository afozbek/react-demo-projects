import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
//import '../src/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="Furkan Ozbek" />
        <div className="container">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
