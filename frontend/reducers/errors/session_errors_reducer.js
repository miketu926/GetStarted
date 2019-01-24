import { RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS,
        CLEAR_SESSION_ERRORS } from '../../actions/session/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_SESSION_ERRORS:
    debugger
      return action.errors;
    default:
      return state;
  }
  
};

export default sessionErrorsReducer;