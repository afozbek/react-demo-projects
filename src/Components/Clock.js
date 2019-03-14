import React, { Component } from 'react'

export default class Deneme extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    // Dom elementi renderladığımız anda gerçekleşir
    componentDidMount() {
        console.log('Furkan');
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    // Dom elementi yok olmadan önceki anda gerçekleşir
    componentWillUnmount() {
        console.log('Faruk');
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

