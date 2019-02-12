import { combineReducers } from 'redux';
import filterReducer from './filterReducer'
import updateReducer from './updateReducer'

const rootReducer = combineReducers({
  filterReducer,
  updateReducer
});

export default rootReducer;