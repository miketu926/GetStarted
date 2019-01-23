import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

const msp = ({session, entities}) => {
  // set the session to null if it doesn't exist, otherwise will find ID
  const sessionUserId = session.currentUserId || {};
  
  return({
    currentUser: entities.users[sessionUserId],
  });

};

const mdp = (dispatch) => {

  return({
    logout: () => dispatch(logout()),
  });
};



class HeaderComponent extends React.Component {
  
  signinNAV () {
    return (
      <nav className='login-nav'>
        <Link to='/login'>Sign in</Link>
      </nav>
    );
  }
  exploreNAV () {
    return (
      <nav className='explore-nav'>
        <div>Explore</div>
      </nav>
    );
  }
  createProjectNAV () {
    return (
      <nav className='create-project-nav'>
        <div>Start a project</div>
      </nav>
    );
  }
  logoNAV () {
    return (
      <nav className='logo-nav'>
        <div>Kickstarter Logo</div>
      </nav>
    );
  }
  searchNAV () {
    return (
      <nav className='search-nav'>
        <div>Search w/ mag glass</div>
      </nav>
    );
  }


  render() {
    const { currentUser, logout } = this.props;

    return (
      <div>
        {this.exploreNAV()}
        {this.createProjectNAV()}
        {this.logoNAV()}
        {this.searchNAV()}
        {this.signinNAV()}
      </div>
    );
  }
}

export default connect(msp, mdp)(HeaderComponent);