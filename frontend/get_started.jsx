import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// FOR TESTING IN DEVELOPMENT
import {createUser,
        login,
        logout} from './util/session_api_util';
// END TESTING - REMOVE IN PROD

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // FOR TESTING IN DEVELOPMENT
  window.createUser = createUser;
  window.login = login;
  window.logout = logout;
  // END TESTING - REMOVE IN PROD
  
  ReactDOM.render(<Root />, root);
});



// createUser AJAX
  //window.createUser({email: "starwars1@gmail.com", password: "starwars1"});
  
// login AJAX
  //window.login({id: 1, email: "starwars@gmail.com", password: "starwars"});

// logout AJAX
  //logout();