import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

const msp = ({ errors }) => {
  return ({
    errors: errors
  });
};

const mdp = (dispatch) => {

  return ({
    createUser: (formUser) => dispatch(createUser(formUser)),
  });
};



class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", confirmEmail: "",
                    password: "", confirmPassword: "",
                    emailClick: false, passwordClick: false };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmClicked = this.handleConfirmClicked.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state).then( () => this.props.history.push('/'));
  }

  signinLink() {
    return (
      <Link to='/login'>Log in</Link>
    );
  }

  handleConfirmClicked(field) {
    return (e) => {
      this.setState({[field]: true})
    }
  }


  render() {
    let confirmEmail = null;
    if (this.state.emailClick) {
      confirmEmail = (
        <input className = 'session-input margin-lr transition'
          type = "email"
          placeholder = "Re-enter email"
          value = { this.state.confirmEmail }
          onChange = { this.update("confirmEmail") } /> 
      )
    }

    let confirmPassword = null;
    if (this.state.passwordClick) {
      confirmPassword = (
        <input className='session-input margin-lr transition'
          type="password"
          placeholder="Re-enter password"
          value={this.state.confirmPassword}
          onChange={this.update("confirmPassword")} />
      )
    }
    
    return (
      <header className='login-form'>
        <form className='signup-form-box' onSubmit={this.handleSubmit}>
          <div className='margin-lr session-form-header'>Have an account? {this.signinLink()}</div>
          <p className='p-h2 margin-lr margin-top'>Sign up</p>

          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.update("name")} />

          <input className='session-input margin-lr transition'
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
            onClick={this.handleConfirmClicked('emailClick')} />
            
          {/* appear and disappear */}
          {confirmEmail}

          <input className='session-input margin-lr transition'
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            onClick={this.handleConfirmClicked('passwordClick')} />

          {/* appear and disappear */}
          {confirmPassword}


          <div className='for-now margin-lr'>CHECKBOX. Receive a weekly mix of handpicked projects, plus occasional GetStarted news.</div>
          <input className='session-submit margin-lr' type="submit" value="Create Account" />
          <div className='for-now margin-lr'>By signing up, you agree to our terms of use, privacy policy, and cookie policy.</div>

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

export default connect(msp, mdp)(SignupComponent);