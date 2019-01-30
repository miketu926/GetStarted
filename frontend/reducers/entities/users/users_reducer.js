import { RECEIVE_CURRENT_USER } from '../../../actions/session/session_actions';
import { RECEIVE_PROJECT } from '../../../actions/projects/project_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }

};

export default usersReducer;