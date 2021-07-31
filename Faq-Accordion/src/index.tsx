import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as theme from "config/themes"
// import "./index.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 12px;
    font-family: "Kumbh Sans", sans-serif;
  }
`


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
