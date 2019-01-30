import { RECEIVE_ALL_PROJECTS,
        RECEIVE_PROJECT,
        REMOVE_PROJECT } from '../../../actions/projects/project_actions';
import { merge } from 'lodash';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
      let newState = merge({}, oldState);
      delete newState[action.projectId];
      return newState;
    default:
      return oldState;
  }
};

export default projectsReducer;