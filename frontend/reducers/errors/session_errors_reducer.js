import { RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS,
        RECEIVE_BLANK_ERRORS } from '../../actions/session/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_BLANK_ERRORS:
      return [];
    default:
      return state;
  }
  
};

export default sessionErrorsReducer;