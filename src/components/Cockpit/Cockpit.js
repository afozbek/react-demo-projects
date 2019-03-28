import React from 'react'
import classes from './Cockpit.css';

const cockpit = props => {
    const classes_ = [];
    let btnClass = '';
    if (props.showPerson) { btnClass = classes.Red; }
    if (props.persons.length <= 2) {
        classes_.push(classes.red); // classes = ['red]
    }
    if (props.persons.length <= 1) {
        classes_.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <p className={classes_.join(' ')}> Bolum7-->70.videoda kaldım </p>
            <button
                className={btnClass}
                onClick={props.togglePersonHandler}>Click me
            </button>
        </div>
    )
};

export default cockpit;
