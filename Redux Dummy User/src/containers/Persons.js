import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAddedHandler} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { persons: state.usr.persons };
};
const mapDispatchToProps = dispatch => {
  return {
    personAddedHandler: () =>
      dispatch({
        type: actions.PERSON_ADDED,
        payload: {
          newPerson: {
            id: Math.random(), // not really unique but good enough here!
            name: "FURKAN ÖZBEK",
            age: Math.floor(Math.random() * 40)
          }
        }
      }),
    personDeletedHandler: id =>
      dispatch({ type: actions.PERSON_DELETED, payload: { id: id } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
