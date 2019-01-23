import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const msp = (state) => {
  return({
    loggedIn: Boolean(state.session.currentUserId)
  });

};

const Auth = ({loggedIn, path, component: Component}) => {
  return(
    <Route
      path={path}
      render={ props => ( 
        loggedIn ? <Redirect to='/' /> : <Component {...props} /> 
      )}
    />
  )
}


export const AuthRoute = withRouter(connect(msp)(Auth));