import * as SessionApiUtil from '../../util/session_api_util';
import { useDispatch } from 'react-redux';

//CONSTANTS
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_BLANK_ERRORS = "RECEIVE_BLANK_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

//ACTION CREATORS

const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};

const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveSessionErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  });
};

export const clearErrors = () => {
  return ({
    type: CLEAR_SESSION_ERRORS,
  });
};


//THUNK ACTIONS

export const createUser = (formUser) => (dispatch) => {
  return (
    SessionApiUtil.createUser(formUser)
      .then(user => {
        return dispatch(receiveCurrentUser(user));
      }, err => {
        return dispatch(receiveSessionErrors(err.responseJSON));
      })
  );
};

export const login = (formUser) => dispatch => {
  return (
    SessionApiUtil.createSession(formUser)
      .then(user => {
        dispatch(receiveCurrentUser(user));
      }, err => {
        return dispatch(receiveSessionErrors(err.responseJSON));
      })
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));
};