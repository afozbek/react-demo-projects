import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adadad', name: 'Furkan', age: 28 },
      { id: 'adadaerr', name: 'Sena', age: 29 },
      { id: 'adadfrt', name: 'Yunus', age: 26 }
    ],
    showPersons: true
  }

  onNameChange = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // break the referencing of the object by spread operator
    const person = { ...this.state.persons[personIndex] };
    // const person1 = Object.assign({}, this.state.persons[personIndex]);

    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    console.log(persons.length)
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  change={(e) => this.onNameChange(e, person.id)}
                >{person.id}</Person>
              );
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    const classes_ = [];
    if (this.state.persons.length <= 2) {
      classes_.push(classes.red); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      classes_.push(classes.bold); // classes = ['red', 'bold']
    }
    console.log(classes)
    return (

      <div className={classes.App} >
        <p className={classes_.join(' ')}>This is really working :D </p>
        <button className={btnClass}
          onClick={this.togglePersonHandler}>Click me</button>
        {persons}
      </div>

    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
