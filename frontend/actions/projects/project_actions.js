import * as ProjectsApiUtil from '../../util/projects_api_util';

// CONSTANTS
export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

// ACTION CREATORS
const receiveAllProjects = (projects) => {
  return ({
    type: RECEIVE_ALL_PROJECTS,
    projects: projects,
  });
};
const receiveProject = ({project, user}) => {
  return ({
    type: RECEIVE_PROJECT,
    project: project,
    user: user,
  });
};
const removeProject = (project) => {
  return ({
    type: REMOVE_PROJECT,
    projectId: project.id,
  });
};

// THUNK ACTIONS
export const fetchAllProjects = () => dispatch => {
  return ProjectsApiUtil.fetchProjects().then( projects => dispatch(receiveAllProjects(projects)));
};

export const fetchProject = (id) => dispatch => {
  return ProjectsApiUtil.fetchProject(id).then( project => dispatch(receiveProject(project)));
};

export const createProject = (project) => dispatch => {
  return ProjectsApiUtil.createProject(project).then( project => dispatch(receiveProject(project)));
};

export const updateProject = (project) => dispatch => {
  return ProjectsApiUtil.updateProject(project).then( project => dispatch(receiveProject(project)));
};

export const deleteProject = (id) => dispatch => {
  return ProjectsApiUtil.deleteProject(id).then( () => dispatch(removeProject()));
};

