import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../actions/projects/project_actions';
import { Link, Redirect } from 'react-router-dom';
import TierItem from '../projects/new_tier_component';

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
      project: "", description: "", category: "Arts",
      goal_amt: 0, funded_amt: 0, duration_days: 30, location: "",
      project_picture: null,
      tiers: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.appendTierItem = this.appendTierItem.bind(this);
    this.updateTier = this.updateTier.bind(this);
    this.removeTierItem = this.removeTierItem.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile(e) {
    this.setState({ project_picture: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[project]', this.state.project);
    formData.append('project[description]', this.state.description);
    formData.append('project[goal_amt]', this.state.goal_amt);
    formData.append('project[category]', this.state.category);
    formData.append('project[funded_amt]', this.state.funded_amt);
    formData.append('project[duration_days]', this.state.duration_days);
    formData.append('project[location]', this.state.location);
    formData.append('project[project_picture]', this.state.project_picture);

    // this.state.tiers.forEach(function (tier, idx) {

    //   formData.append(`tier${idx}[title]`, tier.title);
    //   formData.append(`tier${idx}[description]`, tier.description);
    //   formData.append(`tier${idx}[amount]`, tier.amount);
    // });

    this.props.createProject(formData).then(
      (object) => this.props.history.push(`/projects/${object.project.id}`)
    );
  }

  appendTierItem(e) {
    e.preventDefault();
    this.setState({
      tiers: this.state.tiers.concat(
        [{ title: "", amount: 0, description: "" }]
      )
    });
  }

  updateTier(field, idx) {
    return (e) => {
      e.preventDefault();
      let change = this.state.tiers[idx];
      change[field] = e.target.value;
      this.setState({
        tiers: this.state.tiers.slice(0, idx)
          .concat(change)
          .concat(this.state.tiers.slice(idx + 1))
      });
    };
  }

  removeTierItem(e) {
    e.preventDefault();
    let array = [...this.state.tiers];
    let index = array.indexOf(e.target.value);
    array.splice(index, 1);
    this.setState({ tiers: array });
  }

  render() {
    const tierItems = this.state.tiers.map((tier, idx) => {
      return (
        <TierItem
          tier={tier}
          key={idx}
          idx={idx}
          updateTier={this.updateTier}
        />
      )
    });

    return (
      <div>

        <form className='flex flex-col'>

          <div className='basics-box'>
            <h1 className='black-funded-amt basics-line-h'>Start with the basics</h1>
            <h2 className='proj-desc basics-line-h'>Make it easy for people to learn about your project.</h2>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Project Title</h2>
              <h2 className='basics-deets'>Write a clear, brief title that helps people quickly understand the gist of your project.</h2>
            </div>
            <div className='basics-right-w'>
              <h2 className='basics-title2'>Title</h2>
              <input type="text"
                className='session-input input-box'
                placeholder='App Academy: The Final Cohort'
                value={this.state.project}
                onChange={this.update("project")} />
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Projection Description</h2>
              <h2 className='basics-deets'>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</h2>
            </div>
            <div className='basics-right-w'>
              <h2 className='basics-title2'>Description</h2>
              <textarea
                className='session-input input-box'
                cols="80"
                rows="10"
                value={this.state.description}
                placeholder='Write about your project'
                onChange={this.update("description")} />
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Project Category</h2>
              <h2 className='basics-deets'>Choose the category that most closely aligns with your project.</h2>
            </div>
            <div className='basics-right-w'>
              <select className='session-input input-box cat-drop' value={this.state.category}
                onChange={this.update('category')} >
                <option value="Arts">Arts</option>
                <option value="Design">Design</option>
                <option value="Film">Film</option>
                <option value="Games">Games</option>
                <option value="Music">Music</option>
                <option value="Photography">Photography</option>
                <option value="Publishing">Publishing</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Project Location</h2>
              <h2 className='basics-deets'>Enter the location that best describes where your project is based.</h2>
            </div>
            <div className='basics-right-w'>
              <input type="text"
                className='session-input input-box'
                placeholder='New York, New York'
                value={this.state.location}
                onChange={this.update("location")} />
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Project Image</h2>
              <h2 className='basics-deets'>Add an image that clearly represents your project.</h2>
            </div>
            <div className='basics-right-w'>
              <input type="file" className='session-input input-box' onChange={this.handleFile} />
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Funding Goal</h2>
              <h2 className='basics-deets'>Set an achievable goal that covers what you need to complete your project.</h2>
            </div>
            <div className='basics-right-w'>
              <h2 className='basics-title2'>Goal amount</h2>
              <input type="text"
                className='session-input input-box'
                placeholder='500'
                value={this.state.goal_amt}
                onChange={this.update("goal_amt")} />
            </div>
          </div>

          <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Campaign Duration</h2>
              <h2 className='basics-deets'>Set a time limit for your campaign. You won’t be able to change this after you launch.</h2>
            </div>
            <div className='basics-right-w'>
              <h2 className='basics-title2'>Fixed number of days (1-60)</h2>
              <input type="text"
                className='session-input input-box'
                placeholder='Fixed number of days (1-60)'
                value={this.state.duration_days}
                onChange={this.update("duration_days")} />
            </div>
          </div>

          {/* <div className='create-bot-border row-wrap'>
            <div className='basics-left-w'>
              <h2 className='basics-title'>Add a Reward</h2>
              <h2 className='basics-deets'>Offer simple, meaningful rewards that bring backers closer to your project. Rewards don’t have to be physical items. Consider special experiences or behind-the-scenes peeks into your project.</h2>
            </div>
            <div className='basics-right-w'>

              {tierItems}

              <button onClick={this.appendTierItem} className='add-reward'>+ Add Reward</button>
              <button onClick={this.removeTierItem} className='remove-reward'>- Remove Reward</button>

            </div>
          </div> */}

          <input type="submit" className='back-this-project create-project' onClick={this.handleSubmit} value="Create Project" />

        </form>

      </div>

    )
  }


}


export default connect(msp, mdp)(NewProjectComponent);