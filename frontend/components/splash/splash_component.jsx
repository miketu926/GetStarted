import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return({
    
  });
};

const mdp = (dispatch) => {
  return({
    fetchAllProjects: () => dispatch(fetchAllProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};

class SplashComponent extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }
  
  render() {

    return(
      <h1>HI I'M THE SPLASH PAGE</h1>
    )
    
  }
  
}


export default connect(msp, mdp)(SplashComponent);