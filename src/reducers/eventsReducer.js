'use es6';

import moment from 'moment';
import * as ActionTypes from '../actions/ActionTypes';

const initialState = {
  events: [
    {
      id: 1,
      start: new Date(moment('12-6-2019', 'MM-DD-YYYY')),
      end: new Date(moment('12-9-2019', 'MM-DD-YYYY')),
      title: 'Paul Arrives!'
    },
    {
      id: 2,
      start: new Date(moment('12-10-2019', 'MM-DD-YYYY')),
      end: new Date(moment('12-12-2019', 'MM-DD-YYYY')),
      title: 'Steve Arrives!'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_EVENT:
      return {
        events: [...state.events, action.eventInfo]
      };
    case ActionTypes.UPDATE_EVENT:
      return {
        events: state.events.map(event => {
          if (event.id === action.id) {
            return {
              ...event,
              ...action.updates
            };
          }
          return event;
        })
      };
    case ActionTypes.DELETE_EVENT:
      return {
        events: state.events.filter(({ id }) => id !== action.id)
      };
    default:
      return state;
  }
}
