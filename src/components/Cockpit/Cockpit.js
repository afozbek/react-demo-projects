import React, { useEffect } from 'react'
import classes from './Cockpit.css';

const cockpit = props => {

    // If the second parameter changes use the {Effect}!
    // If the second parameter is empty arr useEffect once!
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http Requests..
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    });

    const classes_ = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        classes_.push(classes.red); // classes = ['red]
    }
    if (props.personsLength <= 1) {
        classes_.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes_.join(' ')}> Bolum 7-->79.videoda kaldım </p>
            <button
                className={btnClass}
                onClick={props.togglePersonHandler}>Show Persons
            </button>
        </div>
    )
};

export default React.memo(cockpit);
