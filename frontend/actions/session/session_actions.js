import {createUser, login, logout} from '../../util/session_api_util';

//CONSTANTS
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//ACTION CREATORS

const createUserAction = (user) => {
  return({
    type: CREATE_USER,
    user: user
  });
};

const loginAction = (user) => {
  return({
    type: LOGIN_USER,
    user: user
  });
};

const logoutAction = () => {
  return({
    type: LOGOUT_USER,
  });
};

//THUNK ACTIONS

export const createUserThunk = (user) => (dispatch) => {
  return createUser(user).then(user => dispatch(createUserAction(user)));
};

export const loginThunk = (user) => dispatch => {
  return login(user).then(user => dispatch(loginAction(user)));
};

export const logoutThunk = () => dispatch => {
  return logout().then( () => dispatch(logoutAction()));
};