import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

const msp = ({ session, entities }) => {

  return ({
    currentUser: entities.users[session.sessionUserId],
  });

};

const mdp = (dispatch) => {

  return ({
    createUser: (formUser) => dispatch(createUser(formUser)),
  });
};



class SignupComponent extends React.Component {

  render() {

    const signupForm = () => {
      return (
        <div className='signup-page'>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }

    return signupForm()
  }

}

export default connect(msp, mdp)(SignupComponent);