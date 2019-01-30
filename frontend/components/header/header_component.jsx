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
      <button className='hover'>Explore</button>
    );
  }
  createProjectNAV () {
    return (
      <button className='hover'><Link to='/projects/new'>Start a project</Link></button>
    );
  }
  logoNAV () {
    return (
      <Link className = 'logo-nav' to='/'>GETSTARTED</Link>
    );
  }
  searchNAV () {
    return (
      <button className='hover'>Search</button>
    );
  }

  signinNAV () {
    return (
      <div className='login-nav nav-font'>
        <button><Link className='hover' to='/login'>Sign in</Link></button>
      </div>
    );
  }

  logoutNAV () {
    return (
      <div className='login-nav nav-font'>
        <button className='hover nav-font' onClick={this.props.logout}>Logout</button>
      </div>
    )
  }

  render() {
    const { currentUser } = this.props;

    let profileBtn = this.signinNAV();
    if (currentUser) {
      profileBtn = this.logoutNAV();
    };
    
    
    return (
      <header className='nav-bar'>
        <nav className='nav-left'>
          <div className='explore-nav nav-font'>{this.exploreNAV()}</div>
          <div className='start-project-nav nav-font'>{this.createProjectNAV()}</div>
        </nav>
          {this.logoNAV()}
        <nav className='nav-right'>
          <div className='search-nav nav-font'>{this.searchNAV()}</div>
          {profileBtn}
        </nav>
      </header>
    );
  }
}

export default connect(msp, mdp)(HeaderComponent);