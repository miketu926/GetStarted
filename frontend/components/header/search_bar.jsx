import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects } from './../../actions/projects/project_actions';

const msp = () => {

  return ({

  });

};

const mdp = (dispatch) => {
  return({
    fetchAllProjects: (searchTerm) => dispatch(fetchAllProjects(searchTerm)),
  });
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.fetchAllProjects(this.state.searchTerm);
    // .then( object => this.props.history.push(`/projects/${object.project.id}`));
  }


  render() {
    return (
      <header className='nav-bar'>
        <form>
          <input type="text" onChange={this.update("searchTerm")} placeholder="Search.."></input>
          <input onClick={this.handleSubmit} type="submit" value="Search!!"/>
        </form>
        <button id='search-exit' onClick={this.props.handleSearchExit}>X</button>
      </header>
    )
  }
  
}

export default connect(msp, mdp)(SearchBar);