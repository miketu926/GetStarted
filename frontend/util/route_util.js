import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = state => {
  return ({
    loggedIn: Boolean(state.session.currentUserId),
  });
};

// renders component if logged out, otherwise redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
        
        
// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);


// connect Auth to the redux state
export const AuthRoute = withRouter(connect(msp)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(msp)(Protected));