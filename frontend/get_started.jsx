import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// FOR TESTING IN DEVELOPMENT
import { logout } from './actions/session/session_actions';
import * as ALLAJAX from './util/projects_api_util';
import * as PROJECTTHUNKS from './actions/projects/project_actions';
// END TESTING - REMOVE IN PROD

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

  // FOR TESTING IN DEVELOPMENT
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.fetchPROJECTS = PROJECTTHUNKS.fetchAllProjects;
  window.fetchPROJECT = PROJECTTHUNKS.fetchProject;
  window.createPROJECT = PROJECTTHUNKS.createProject;
  window.deletePROJECT = PROJECTTHUNKS.deleteProject;
  // END TESTING - REMOVE IN PROD

  ReactDOM.render(<Root store={store} />, root);
});