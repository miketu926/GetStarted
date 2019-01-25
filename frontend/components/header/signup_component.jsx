import React from 'react';
import { connect } from 'react-redux';
import { createUser, clearErrors } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

const msp = ({ errors }) => {
  return ({
    errors: errors.errors || []
  });
};

const mdp = (dispatch) => {

  return ({
    createUser: (formUser) => dispatch(createUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
  });
};



class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", confirmEmail: "",
                    password: "", confirmPassword: "",
                    emailClick: false, passwordClick: false   };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmClicked = this.handleConfirmClicked.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // TESTING MATCHING EMAIL AND PASSWORD CONFIRMS
  // setState doens't allow submit button to work when reaches else
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.email === this.state.confirmEmail && this.state.password === this.state.confirmPassword) {
      this.props.createUser(this.state).then( () => this.props.history.push('/'));
    } else {
      return () => {
        // this.setState({errors: ['Email and/or password confirmations do not match']});
        this.setState(this.props.errors.push('Email and/or password confirmations do not match'));
      };
    }
  }
  // END TESTING

  signinLink() {
    return (
      <Link to='/login'>Log in</Link>
    );
  }

  handleConfirmClicked(field) {
    return () => {
      this.setState({[field]: true})
    }
  }


  render() {
    // EMAIL/PASSWORD APPEARANCE
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
    // END EMAIL/PASSWORD APPEARANCE

    // ERRORS LIST
    const errorsList = this.props.errors.map( (error, idx) => {
      return (<li key={idx} class='li'>{error}</li>);
    });

    let errorsBox = null;
    if (errorsList.length > 0) {
      errorsBox = (<ul className='errors margin-lr'>{errorsList}</ul>)
    }
    // END ERROR LIST
    return (
      <header className='login-form'>
        <form className='signup-form-box' onSubmit={this.handleSubmit}>
          <div className='margin-lr session-form-header'>Have an account? {this.signinLink()}</div>
          <p className='p-h2 margin-lr margin-top'>Sign up</p>

          {errorsBox}
          
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
            onSelect={this.handleConfirmClicked('emailClick')} />
            
          {/* APPEARS ONCE handleConfirmClicked */}
          {confirmEmail}

          <input className='session-input margin-lr transition'
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            onSelect={this.handleConfirmClicked('passwordClick')} />

          {/* APPEARS ONCE handleConfirmClicked */}
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