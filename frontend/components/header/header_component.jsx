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
  exploreNAV () {
    return (
      <div className='explore-nav nav-font'>
        <button className='hover'>Explore</button>
      </div>
    );
  }
  createProjectNAV () {
    return (
      <div className='start-project-nav nav-font'>
        <button className='hover'>Start a project</button>
      </div>
    );
  }
  logoNAV () {
    return (
      <Link className = 'logo-nav' to='/'>GETSTARTED</Link>
    );
  }
  searchNAV () {
    return (
      <div className='search-nav nav-font'>
        <button className='hover'>Search</button>
      </div>
    );
  }

  signinNAV () {
    return (
      <div className='login-nav nav-font'>
        <button><Link className='hover' to='/login'>Sign in</Link></button>
      </div>
    );
  }


  render() {
    const { currentUser, logout } = this.props;

    return (
      <header className='nav-bar'>
        <nav className='nav-left'>
          {this.exploreNAV()} 
          {this.createProjectNAV()}
        </nav>
          {this.logoNAV()}
        <nav className='nav-right'>
          {this.searchNAV()}
          {this.signinNAV()}
        </nav>
      </header>
    );
  }
}

export default connect(msp, mdp)(HeaderComponent);