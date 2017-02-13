import { applyMiddleware,createStore } from 'redux';
import createLogger from 'redux-logger';
const logger = createLogger();

import thunk from 'redux-thunk';

import reducers from '../reducers';

// Store
const store = createStore(
	reducers,
	applyMiddleware(thunk, logger)
);
// console.log(store.getState());

export default store;