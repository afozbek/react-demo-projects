import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'adadad', name: 'Furkan', age: 28 },
        { id: 'adadaerr', name: 'Sena', age: 29 },
        { id: 'adadfrt', name: 'Yunus', age: 26 }
      ],
      showPersons: false,
      showCockpit: true
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props, state);
    return state;
  }

  // will be removed
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    console.log('[App.js] render')
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
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit &&
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            togglePersonHandler={this.togglePersonHandler}
          />
        }
        {persons}
      </div>
    );
  }
}

export default App;
