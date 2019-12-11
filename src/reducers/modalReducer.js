'use es6';

import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  addModalOpen: false,
  updateModalOpen: false,
  activeEvent: 'No event selected'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_ADD_MODAL:
      return {
        addModalOpen: true,
        updateModalOpen: false,
        activeEvent: action.eventInfo
      };
    case ActionTypes.SHOW_UPDATE_MODAL:
      return {
        addModalOpen: false,
        updateModalOpen: true,
        activeEvent: action.eventInfo
      };
    case ActionTypes.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
