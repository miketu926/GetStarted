import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducers from '../reducers/root_reducers';

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducers, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;