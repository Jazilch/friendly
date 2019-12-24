import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  eventsReducer,
  modalReducer
});
