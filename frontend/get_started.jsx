import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = {};
  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUserId: window.currentUser.id
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    delete window.currentUser;
    store = configureStore(preloadedState);
  }
  else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});