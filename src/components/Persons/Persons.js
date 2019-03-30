import React, { PureComponent } from 'react'
import Person from './Person/Person';
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (
    //         nextProps.persons !== this.props.persons ||
    //         this.props.clicked !== nextProps.clicked ||
    //         this.props.changed !== nextProps.changed
    //     ) {
    //         return true;
    //     }
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Furkan Ozbek' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount')
    }
    render() {
        console.log('[Person.js] rendering..')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    change={(e) => this.props.changed(e, person.id)}
                    key={index}
                >
                    {person.id}
                </Person>
            );
        });
    }

};

export default Persons;