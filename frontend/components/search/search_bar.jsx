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
      that.props.history.push('/search');
      that.props.handleSearchExit();
    });
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

export default withRouter(connect(msp, mdp)(SearchBar));