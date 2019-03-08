import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
function tick() {
    const element = (
        <div>
            <h1>Furkan Ozbek</h1>
            <h2>Şu an tarih {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}


setInterval(tick, 1000);
serviceWorker.unregister();
