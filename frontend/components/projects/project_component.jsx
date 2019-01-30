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

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  render() {

    const project = this.props.project;
    const user = this.props.user;
    if (!project || !user) {
      return <div>Loading...</div>
    }

    return (
      <div className='main-background'>
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
              <progress className='progress-bar' max="1" value={project.funded_amt/project.goal_amt}></progress>
              <h2>${this.numberWithCommas(project.funded_amt)}</h2>
              <h2>{`pledged of $${this.numberWithCommas(project.goal_amt)} goal`}</h2>
              <h2>number of backers here</h2>
              <h2>{this.numberWithCommas(project.duration_days)}</h2>
              <h2>days to go</h2>
              <h2>BACK THIS PROJECT</h2>
              <h2>This project will only be funded if it reaches its goal by...</h2>
            </div>
          </div>

          <div className='cat-project flex row-wrap justify-center'>
            <button className='hover cat-proj'>Campaign</button>
            <button className='hover cat-proj'>FAQ</button>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className="flex row-wrap justify-center">
            <div className='flex flex-col'>
              <h2>ABOUT</h2>
              <h3>project description</h3>
            </div>
            <div className='flex flex-col'>
              <h2>SUPPORT</h2>
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