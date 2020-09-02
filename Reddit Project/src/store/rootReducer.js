import { combineReducers } from 'redux';

import { linkListReducer } from './linkList/reducer';
import { notificationReducer } from './notification/reducer';

export default combineReducers({
  linkList: linkListReducer,
  notification: notificationReducer,
});
