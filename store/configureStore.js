import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger)),
  );
  return store;
}

export default configureStore;
