import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import {navMiddleware} from './navigators/index';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const tilteStore = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, logger, navMiddleware))
);

export default tilteStore;