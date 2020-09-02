import { combineReducers } from 'redux';

import todos from "./todoReducer";
import activeFilter from './activeFilterReducer';

export default combineReducers({
  todos,
  activeFilter
});