'use es6';

import * as ActionTypes from './ActionTypes';

export const showAddModal = eventInfo => {
  return {
    type: ActionTypes.SHOW_ADD_MODAL,
    eventInfo
  };
};

export const showUpdateModal = eventInfo => {
  return {
    type: ActionTypes.SHOW_UPDATE_MODAL,
    eventInfo
  };
};

export const hideModal = () => {
  return {
    type: ActionTypes.HIDE_MODAL
  };
};
