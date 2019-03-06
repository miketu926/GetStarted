import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

const msp = (state, ownProps) => {
  const projects = Object.values(state.entities.projects) || [];
  const searchTerm = ownProps.match.params.searchTerm;
  const projectCount = projects.length;
  const users = state.entities.users;

  return({
    projects,
    searchTerm,
    projectCount,
    users,
  });
};

const mdp = (dispatch) => {
  return({
  });
};

// this takes in SearchIndexItem for each project searched

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const that = this;
    const projects = this.props.projects.map(project => {
      return (
        <SearchIndexItem
          key={project.id}
          project={project}
          user={this.props.users[project.user_id]} />
      );
    });

    let wordProject = "projects";
    if (this.props.projectCount === 1) {
      wordProject = "project";
    }
    
    return(
    <div className='flex flex-col search-page'>
      <h2 className='search-count-sent'>Explore <i className='green-bold'>{this.props.projectCount} {wordProject}</i> related to <i className='green-bold'>{this.props.searchTerm}</i></h2>
      <ul className='flex row-wrap search-index-w'>
        {projects}
      </ul>
    </div>
    )
  }

}

export default connect(msp, mdp)(SearchIndex);