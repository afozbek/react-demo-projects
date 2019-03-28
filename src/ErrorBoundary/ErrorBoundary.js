import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (err, info) => {
        this.setState({ hasError: true, errorMessage: err })
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }
        else {
            return this.props.children;
        }
    }
}
