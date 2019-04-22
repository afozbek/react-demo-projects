import * as actions from "../actions";

const initialState = {
  persons: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PERSON_ADDED:
      return {
        ...state,
        persons: [...state.persons, action.payload.newPerson]
      };
    case actions.PERSON_DELETED:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default userReducer;
