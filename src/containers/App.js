import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'adadad', name: 'Furkan', age: 28 },
      { id: 'adadaerr', name: 'Sena', age: 29 },
      { id: 'adadfrt', name: 'Yunus', age: 26 }
    ],
    showPersons: false
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
    if (this.state.showPersons) {
      persons = (
        < Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.onNameChange}
        />
      );
    }

    return (
      <div className={classes.App} >
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
