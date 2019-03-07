import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllProjects } from '../../actions/projects/project_actions';

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
    const that = this;
    e.preventDefault();
    this.props.fetchAllProjects(this.state.searchTerm)
    .then( () => {
      that.props.history.push(`/search/${this.state.searchTerm}`);
      that.props.handleSearchExit();
    });
  }

  render() {
    return (
      <header className='search-bar'>
        <form className='form-bar'>
          <input type="text" onChange={this.update("searchTerm")} 
            className='search-input'
            placeholder="Search for projects or categories" 
            autofocus="autofocus" onfocus="this.select()" />
          <button onClick={this.handleSubmit}><i className="fas fa-search search-submit hover-header"></i></button>
        </form>
        <button className='hover-header' id='search-exit' onClick={this.props.handleSearchExit}>+</button>
      </header>
    )
  }
}

export default withRouter(connect(msp, mdp)(SearchBar));