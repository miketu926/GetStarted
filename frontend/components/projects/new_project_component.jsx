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
    this.state = {
      project: "", description: "", category: "",
      goalAmt: "", fundedAmt: 0, durationDays: 30, location: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this); 
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state).then ( 
      () => this.props.history.push(`/projects/${this.state.project.id}`)
    );
  }

  render() {

    return (
    <div>

      <div>
        <h2>BASICS NAV</h2>
      </div>

      <form onSubmit={this.handleSubmit}>

        <div>
          <h1>START WITH BASICS</h1>
          <h2>Make it easy for people to learn about your project.</h2>
        </div>

        <div>
          <div>
            <h2>PROJECT TITLE</h2>
            <h2>Write a clear, brief title that helps people quickly understand the gist of your project.</h2>
          </div>
          <div>
            <h2>TITLE</h2>
            <input type="text" 
              placeholder='App Academy: A Party That Never Ends'
              value={this.state.project}
              onChange={this.update("project")} />
          </div>
        </div>

        <div>
          <div>
            <h2>Projection Description</h2>
            <h2>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</h2>
          </div>
          <div>
            <h2>Description</h2>
              <textarea 
                cols="80"
                rows="10"
                value={this.state.description} 
                placeholder='Write about your project'
                onChange={this.update("description")} />
          </div>
        </div>

        <div>
          <div>
            <h2>PROJECT CATEGORY</h2>
            <h2>Choose the category that most closely aligns with your project.</h2>
          </div>
          <div>
              <select value={this.state.category}
                      onChange={this.update('category')} >
                <option value="Arts">Arts</option>
                <option value="Design">Design</option>
                <option value="Film">Film</option>
                <option value="Games">Games</option>
                <option value="Photography">Photography</option>
                <option value="Technology">Technology</option>
              </select>
          </div>
        </div>

        <div>
          <div>
            <h2>PROJECT LOCATION</h2>
            <h2>Enter the location that best describes where your project is based.</h2>
          </div>
          <div>
            <input type="text"
              placeholder='New York, New York'
              value={this.state.location}
              onChange={this.update("location")} />
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
            <input type="text"
              placeholder='500'
              value={this.state.goalAmt}
              onChange={this.update("goalAmt")} />
          </div>
        </div>

        <div>
          <div>
            <h2>CAMPAIGN DURATION</h2>
            <h2>Set a time limit for your campaign. You won’t be able to change this after you launch.</h2>
          </div>
          <div>
            <input type="text"
              placeholder='30'
              value={this.state.durationDays}
              onChange={this.update("durationDays")} />
          </div>
        </div>

        <input type="submit" value="Create Project"/>

      </form>
      
    </div>

    )
  }
  
  
}


export default connect(msp, mdp)(NewProjectComponent);