import React, { Component } from 'react'
import FormattedDate from './FormattedDate'
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(), furkan: 100 };
    }
    // Dom elementi renderladığımız anda gerçekleşir
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    //Tanımlı fonksiyonumuz state imizi güncellemek için
    tick() {
        this.setState({
            date: new Date()
        })
    }
    getFurkan() {
        this.setState((prevState) => {
            return { furkan: prevState.furkan + 100 }
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
                <FormattedDate date={new Date()} />
            </div>
        )
    }
}

