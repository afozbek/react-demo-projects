import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import Auxiliary from '../../../hoc/Auxiliary';

import AuthContext from '../../../context/auth-context';
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Welcome {this.props.name}</p> : <p>Please login</p>}
                </AuthContext.Consumer>

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    // (inputEl) => { this.inputElement = inputEl }
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);