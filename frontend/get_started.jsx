import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// FOR TESTING IN DEVELOPMENT
import {createUser,
        createSession,
        deleteSession} from './util/session_api_util';
// END TESTING - REMOVE IN PROD

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // FOR TESTING IN DEVELOPMENT
  window.createUser = createUser;
  window.createSession = createSession;
  window.deleteSession = deleteSession;
  // END TESTING - REMOVE IN PROD
  
  ReactDOM.render(<Root />, root);
});