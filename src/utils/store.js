'use es6';

import { createStore, applyMiddleware, compose } from 'redux';

// Logger with default options
import logger from 'redux-logger';

import reducers from '../reducers';

const createStoreWithMiddleware = compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('../reducers', () =>
    createStoreWithMiddleware.replaceReducer(reducers)
  );
}

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
}
