'use es6';

import * as ActionTypes from './ActionTypes';

export const addEvent = eventInfo => {
  return {
    type: ActionTypes.ADD_EVENT,
    eventInfo
  };
};

export const updateEvent = (id, updates) => {
  return {
    type: ActionTypes.UPDATE_EVENT,
    id,
    updates
  };
};

export const deleteEvent = id => {
  return {
    type: ActionTypes.DELETE_EVENT,
    id
  };
};
