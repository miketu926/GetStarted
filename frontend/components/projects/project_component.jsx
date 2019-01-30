import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId];
  const user = state.entities.users[project.user_id];

  return ({
    project: project,
    user: user
  });
};

const mdp = (dispatch) => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};


class ProjectShowComponent extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.project.id);
  }
  
  render() {

    const project = this.props.project;
    const user = this.props.user;
    if (!project || !user) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div className='flex flex-col'>
          <div className='flex row-wrap justify-center'>
            <h2>{this.props.user.name}</h2>
            <div className='flex flex-col'>
              <h2>{project.project}</h2>
              <h2>{project.description}</h2>
            </div>
          </div>
          <div className='flex row-wrap justify-center'>
            <div className='flex flex-col'>
              <img src={project.photo} />
              <h2>{project.category} | {project.location}</h2>
            </div>
            <div className='flex flex-col'>
              <h2>funding status bar</h2>
              <h2>{project.funded_amt}</h2>
              <h2>{`pledged of $${project.goal_amt} goal`}</h2>
              <h2>backers</h2>
              <h2>{project.duration_days}</h2>
              <h2>days to go</h2>
              <h2>BACK THIS PROJECT</h2>
              <h2>This project will only be funded if it reaches its goal by...</h2>
            </div>
          </div>
          <div className='flex row-wrap justify-start'>
            <h2>CAMPAIGN</h2>
            <h2>FAQ</h2>
            <h2>UPDATES</h2>
            <h2>COMMENTS</h2>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex row-wrap justify-center">
            <div className='flex flex-col'>
              <h2>ABOUT</h2>
            </div>
            <div className='flex flex-col'>
              <h2>MAKE A PLEDGE W/O A REWARD</h2>
              <h2>REWARD TIER 1</h2>
              <h2>REWARD TIER 2</h2>
              <h2>REWARD TIER 3</h2>
            </div>
          </div>
        </div>
      </div>
    )

  };

}


export default connect(msp, mdp)(ProjectShowComponent);