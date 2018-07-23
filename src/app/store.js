import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import {navMiddleware} from './navigators';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {setupMockMaps} from '../mockData/factories/map';

let logger = createLogger({
  timestamps: true,
  duration: true
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigationData']
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  compose(applyMiddleware(thunk, logger, navMiddleware))
);
export const persistor = persistStore(store);

setupMockMaps();
