const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: [
          ...state.results,
          {
            id: Math.random() * 1000,
            value: state.counter
          }
        ]
      };
    case "DELETE_RESULT":
      return {
        ...state,
        results: state.results.filter(result => result.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
