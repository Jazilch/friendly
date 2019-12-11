import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventsReducer from './eventsReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  eventsReducer,
  modalReducer,
  formReducer
});
