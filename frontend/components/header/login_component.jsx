import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

const msp = ({ session, entities }) => {

  return ({
    currentUser: entities.users[session.sessionUserId],
  });

};

const mdp = (dispatch) => {

  return ({
    login: (formUser) => dispatch(login(formUser)),
  });
};



class LoginComponent extends React.Component {

  render() {

    const loginForm = () => {
      return (
        <div className='login-page'>
          <Link to='/signup'>Sign Up!</Link>
        </div>
      );
    }

    return loginForm()
  }

}

export default connect(msp, mdp)(LoginComponent);