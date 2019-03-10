import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            proximity: ''
        };
        this.state = this.initialState;
    }

    //First, we’ll make the function that will run every time a change is made to an input.
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, proximity } = this.state;

        return (
            <form action="#">
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="">Proximity</label>
                <input
                    type="text"
                    name="proximity"
                    value={proximity}
                    onChange={this.handleChange}
                />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}
