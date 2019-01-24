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
      <Link to='/login'>Log in</Link>
    );
  }

  render() {

    return (
      <header className='login-form'>
        <form className='signup-form-box' onSubmit={this.handleSubmit}>
          
          <div className='margin-lr session-form-header'>Have an account? {this.signinLink()}</div>

          <p className='p-h2 margin-lr margin-top'>Sign up</p>


          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Name"
            value={this.state.firstName}
            onChange={this.update("firstName")} />

          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")} />
            
          <input className='session-input margin-lr transition'
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />

          <p className='margin-lr'>Receive a weekly mix of handpicked projects, plus occasional GetStarted news. CHECKBOX</p>
          <p className='margin-lr'>By signing up, you agree to our terms of use, privacy policy, and cookie policy.</p>
          <input className='session-submit margin-lr' type="submit" value="Create Account" />

          <div className="divider margin-lr">
            <div className="line"></div>
            <div className="txt">or</div>
          </div>

          <button onClick={this.guestLogin} className="guest-submit guest margin-lr">Guest Log in</button>
        </form>
      </header>
    )

  }

}

export default connect(null, mdp)(SignupComponent);