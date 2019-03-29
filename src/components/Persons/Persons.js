import React from 'react'
import Person from './Person/Person';
const persons = props => {
    console.log('[Person.js] rendering..')
    return props.persons.map((person, index) => {
        return (
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                change={(e) => props.changed(e, person.id)}
                key={index}
            >
                {person.id}
            </Person>
        );
    });
};

export default persons;