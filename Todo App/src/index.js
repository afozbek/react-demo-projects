import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./main.scss";

import { store } from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
