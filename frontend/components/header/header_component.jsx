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
      <div className='login-nav'>
        <Link to='/login'>Sign in</Link>
      </div>
    );
  }
  exploreNAV () {
    return (
      <div className='explore-nav'>
        <div>Explore</div>
      </div>
    );
  }
  createProjectNAV () {
    return (
      <div className='create-project-nav'>
        <div>Start a project</div>
      </div>
    );
  }
  logoNAV () {
    return (
      <div className='logo-nav'>
        <div>KICKSTARTER</div>
      </div>
    );
  }
  searchNAV () {
    return (
      <div className='search-nav'>
        <div>Search w/ mag glass</div>
      </div>
    );
  }


  render() {
    const { currentUser, logout } = this.props;

    return (
      <nav className='nav-bar'>
        {this.exploreNAV()} 
        {this.createProjectNAV()}
        {this.logoNAV()}
        {this.searchNAV()}
        {this.signinNAV()}
      </nav>
    );
  }
}

export default connect(msp, mdp)(HeaderComponent);