import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return ({

  });
};

const mdp = (dispatch) => {
  return ({
    createProject: (project) => dispatch(createProject(project)),
  });
};


class NewProjectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
    <div>

      <div>
        <h2>BASICS NAV</h2>
        <h2>REWARDS NAV</h2>
        <h2>STORY NAV</h2>
        <h2>PEOPLE NAV</h2>
      </div>

      <div>
        <h1>START WITH BASICS</h1>
      </div>

      <div>
        <div>
          <h2>PROJECT TITLE</h2>
          <h2>Write a clear, brief title that helps people quickly understand the gist of your project.</h2>
        </div>
        <div>
          <h2>TITLE</h2>
          <h2>Title FORMINPUT</h2>
        </div>
      </div>

      <div>
        <div>
          <h2>PROJECT CATEGORY</h2>
          <h2>Choose the category that most closely aligns with your project.</h2>
        </div>
        <div>
          <h2>Category DROPDOWN INPUT</h2>
        </div>
      </div>
      
      <div>
        <div>
          <h2>PROJECT LOCATION</h2>
          <h2>Enter the location that best describes where your project is based.</h2>
        </div>
        <div>
          <h2>Location FORMINPUT</h2>
        </div>
      </div>

      <div>
        <div>
          <h2>PROJECT IMAGE</h2>
          <h2>Add an image that clearly represents your project.</h2>
        </div>
        <div>
          <h2>IMAGE INPUT FORM</h2>
        </div>
      </div>

      <div>
        <div>
          <h2>FUNDING GOAL</h2>
          <h2>Set an achievable goal that covers what you need to complete your project.</h2>
        </div>
        <div>
          <h2>Funding INPUT FORM</h2>
        </div>
      </div>

      <div>
        <div>
          <h2>CAMPAIGN DURATION</h2>
          <h2>Set a time limit for your campaign. You won’t be able to change this after you launch.</h2>
        </div>
        <div>
          <h2>Fixed Number of days Input</h2>
        </div>
      </div>

      
    </div>

    )
  }
  
  
}


export default connect(msp, mdp)(NewProjectComponent);