import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

// const msp = ({ session, entities }) => {
//   return ({
//     currentUser: entities.users[session.currentUserId],
//   });
// };

const mdp = (dispatch) => {

  return ({
    createUser: (formUser) => dispatch(createUser(formUser)),
  });
};



class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", email: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state).then(() => this.props.history.push('/'));
  }

  signinLink() {
    return (
      <div className='signin-link'>
        <Link to='/login'>Sign in</Link>
      </div>
    );
  }

  render() {

    return (
      <header className='signup-form'>
        <h4>Have an account? {this.signinLink()}</h4>
        <h2>Sign up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={this.state.firstName}
            onChange={this.update("name")} />

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")} />
            
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />

          <h5>Receive a weekly mix of handpicked projects, plus occasional GetStarted news. CHECKBOX</h5>
          <h5>By signing up, you agree to our terms of use, privacy policy, and cookie policy.</h5>
          <button>Create Account</button>
        </form>
      </header>
    )

  }

}

export default connect(null, mdp)(SignupComponent);