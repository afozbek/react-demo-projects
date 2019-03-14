import React, { Component } from 'react'

export default class Deneme extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }
    render() {
        return (
            <div>
                <h1>{this.name}</h1>
            </div>
        )
    }
}
