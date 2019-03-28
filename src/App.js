import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Furkan', age: 28 },
      { name: 'Sena', age: 29 },
      { name: 'Yunus', age: 26 }
    ]
  }


  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  onNameChange = e => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: e.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  render() {
    return (
      <div className="App" >
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.onNameChange}
        />
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default App;
