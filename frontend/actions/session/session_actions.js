import * as SessionApiUtil from '../../util/session_api_util';

//CONSTANTS
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

//ACTION CREATORS

const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user: user
  });
};

const logoutCurrentUser = () => {
  return({
    type: LOGOUT_CURRENT_USER,
  });
};

//THUNK ACTIONS

export const createUser = (formUser) => (dispatch) => {
  return SessionApiUtil.createUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const login = (formUser) => dispatch => {
  return SessionApiUtil.createSession(formUser).then(user => dispatch(receiveCurrentUser(user)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.deleteSession().then( () => dispatch(logoutCurrentUser()));
};