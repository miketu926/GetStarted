import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';
import ExploreNavComponent from './exploreNAV_component';
import SearchBar from '../search/search_bar';
import { fetchAllProjects } from '../../actions/projects/project_actions';

const msp = ({session, entities}) => {
  // set the session to null if it doesn't exist, otherwise will find ID
  const sessionUserId = session.currentUserId || {};
  
  return({
    currentUser: entities.users[sessionUserId],
  });

};

const mdp = (dispatch) => {

  return({
    fetchAllProjects: (searchTerm) => dispatch(fetchAllProjects(searchTerm)),
    logout: () => dispatch(logout()),
  });
};

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchClick: false,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchExit = this.handleSearchExit.bind(this);
  }

  createProjectNAV() {
    return (
      <button className='hover-header'><Link to='/projects/new'>Start a project</Link></button>
    );
  }
  logoNAV() {
    return (
      <Link className='logo-nav' to='/'>GETSTARTED</Link>
    );
  }
  signinNAV() {
    return (
      <div className='login-nav nav-font'>
        <button><Link className='hover-header' to='/login'>Sign in</Link></button>
      </div>
    );
  }
  logoutNAV() {
    return (
      <div className='login-nav nav-font'>
        <button className='hover-header nav-font' onClick={this.props.logout}>Logout</button>
      </div>
    )
  }

  handleSearch() {
    this.setState({ searchClick: true });
  }

  handleSearchExit() {
    this.setState({ searchClick: false});
  }

  render() {
    const searching = this.state.searchClick;

    const { currentUser } = this.props;
    let profileBtn = this.signinNAV();
    if (currentUser) {
      profileBtn = this.logoutNAV();
    };

    if (searching) {
      return <SearchBar handleSearchExit={this.handleSearchExit} />
    } else {
      return (
        <div>
          <header className='nav-bar'>
            <nav className='nav-left'>
              <ExploreNavComponent fetchAllProjects={this.props.fetchAllProjects} />
              <div className='start-project-nav nav-font'>
                <button className='hover-header'><Link to='/projects/new'>Start a project</Link></button>
              </div>
            </nav>
            <Link className='logo-nav' to='/'>GETSTARTED</Link>
            <nav className='nav-right'>
              <div className='search-nav nav-font'>
                <button className='hover-header' onClick={this.handleSearch}>Search <i className="fas fa-search header-search"></i></button>
              </div>
              {profileBtn}
            </nav>
          </header>
        </div>
      )
    }
  }
}

export default connect(msp, mdp)(HeaderComponent);