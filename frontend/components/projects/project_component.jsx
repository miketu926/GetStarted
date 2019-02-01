import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  const project = state.entities.projects[ownProps.match.params.projectId];
  const user = state.entities.users[project.user_id];
  const currentUserId = state.session.currentUserId;

  return ({
    project: project,
    user: user,
    currentUserId: currentUserId,
  });
};

const mdp = (dispatch) => {
  return ({
    fetchProject: (id) => dispatch(fetchProject(id)),
    deleteProject: (id) => dispatch(deleteProject(id)),
  });
};


class ProjectShowComponent extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchProject(this.props.project.id);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.deleteProject(this.props.project.id).then( () => this.props.history.push('/'));
  }
  
  render() {
    
    const project = this.props.project;
    const user = this.props.user;
    if (!project || !user) {
      return <div>Loading...</div>
    }

    let deleteProjectBox = null;
    if (this.props.project.user_id === this.props.currentUserId) {
      deleteProjectBox = (
        <div className='flex flex-col'>
          <button className='delete-project' onClick={this.handleRemove.bind(this)}>Remove Project</button>
        </div>
      )
    }

    return (
      <div className='main-background'>
        <div className='flex flex-col'>
          <div className='flex row-wrap justify-center proj-mt-50'>
            <h2 className='profile'>By {this.props.user.name}</h2>
            <div className='flex flex-col title-spacing'>
              <h2 className='proj-title'>{project.project}</h2>
              <h2 className='proj-desc'>{project.description}</h2>
            </div>
          </div>
          <div className='flex row-wrap justify-center'>
            <div className='flex flex-col large-piece'>
              <img src={project.photo} width={"815"} height={"455"} />
              <h2 className='details-smaller line-h-60'>{project.category} | {project.location}</h2>
            </div>
            <div className='flex flex-col detail-bar'>
              <progress className='progress-bar' max="1" value={project.funded_amt/project.goal_amt}></progress>
              <h2 className='green-funded-amt'>${this.numberWithCommas(project.funded_amt)}</h2>
              <h2 className='details-small'>{`pledged of $${this.numberWithCommas(project.goal_amt)} goal`}</h2>
              <h2 className='black-funded-amt'>187</h2>
              <h2 className='details-small'>backers</h2>
              <h2 className='black-funded-amt'>{this.numberWithCommas(project.duration_days)}</h2>
              <h2 className='details-small'>days to go</h2>
              <button className='back-this-project'>Back this project</button>
              <h2 className='details-smaller'>This project will only be funded if it reaches its goal by Sat. March 9 2019 3:01 AM EST.</h2>
            </div>
          </div>

          <div className='cat-project flex row-wrap justify-center'>
            <button className='hover cat-proj'>Campaign</button>
            <button className='hover cat-proj'>FAQ</button>
          </div>
        </div>

        <div className='flex flex-col detail-box'>
          <div className="flex row-wrap justify-center">
            <div className='flex flex-col left-detail width-650'>
              <h2 className='about'>About</h2>
              <h3 className='about-deets'>{this.props.project.description}</h3>
            </div>
            <div className='flex flex-col right-detail width-350'>
              <h2 className='about'>Support</h2>
              <h2 className='about-deets'>MAKE A PLEDGE W/O A REWARD</h2>
              <h2 className='about-deets'>REWARD TIER 1</h2>
              <h2 className='about-deets'>REWARD TIER 2</h2>
              <h2 className='about-deets'>REWARD TIER 3</h2>
            </div>
          </div>
        </div>

        {deleteProjectBox}
        {/* <div className='flex flex-col'>
          <button className='delete-project' onClick={this.handleRemove.bind(this)}>Remove Project</button>
        </div> */}

      </div>
    )

  };

}


export default connect(msp, mdp)(ProjectShowComponent);