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
              <h2 className='black-funded-amt'>493</h2>
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
              <h3 className='about-deets'>Whether you use Amazon Alexa, own a Tesla, play mobile games, or use Google Maps, artificial intelligence (AI) is everywhere. Like coding, learning how AI works will soon become an integral skill of everyday life. Getstarted is the first educational self-driving car kit that will teach you about the concept of artificial intelligence and self-driving car technology in a fun and engaging way. With our friendly step-by-step tutorials, you will be able to train her on how to navigate through a miniature map in less than an hour. The more she learns, the better she'll get.</h3>
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
      </div>
    )

  };

}


export default connect(msp, mdp)(ProjectShowComponent);