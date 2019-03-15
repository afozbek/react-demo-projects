import React, { Component } from 'react';
import Clock from './Components/Clock';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            furkan: { text: "Furkan Ozbek" }
        }
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.furkan.text}</h1>
            </div>
        );
    }
}
export default App;