import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//get the App class from App and place it inside root 
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

