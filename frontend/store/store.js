import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducers from '../reducers/root_reducers';

const configureStore = (preloadedState = {}) => {
  return createStore(RootReducers, preloadedState, applyMiddleware(thunk));
};

export default configureStore;