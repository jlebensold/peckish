import { combineReducers } from 'redux';
import * as recipesReducer from './recipes'
import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  recipesReducer,
  navigationReducer,
));
