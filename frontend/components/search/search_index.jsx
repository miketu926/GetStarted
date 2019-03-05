import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

const msp = (state) => {
  const projects = Object.values(state.entities.projects) || [];
  
  return({
    projects
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
    const projects = this.props.projects.map(project => {
      return (
        <SearchIndexItem
          key={project.id}
          project={project} />
      );
    });
    
    return(
    <div>
      <h2>THIS IS SEARCH INDEX</h2>
      <ul>
        {projects}
      </ul>
    </div>
    )
  }

}

export default connect(msp, mdp)(SearchIndex);