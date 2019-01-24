import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

// const msp = ({ session, entities }) => {
//   return ({
//     currentUser: {email: "", password: ""}
//   });
// };

const mdp = (dispatch) => {

  return ({
    login: (formUser) => dispatch(login(formUser)),
  });
};



class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then( () => this.props.history.push('/'));
  }
  
  signupLink () {
    return (
      <Link to='/signup'>Sign Up!</Link>
    );
  }

  render() {

    return (
      <header className='login-form'>
        <form className='login-form-box' onSubmit={this.handleSubmit}>
          <p className='p-h2 margin-lr'>Log in</p>
          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")} />

          <input className='session-input margin-lr transition'
            type="text"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />

          <a href='modalplace'className='login-forgot-password margin-lr'>Forgot your password? MODAL</a>
          <input className='session-submit margin-lr' type="submit" value="Log me in!"/>
          {/* <div className='login-remember-me margin-lr'>Remember me CHECKBOX</div> */}
         
          <div className="divider margin-lr">
            <div className="line"></div>
            <div className="txt">or</div>
          </div>

          <button onClick={this.guestLogin} className="guest-submit guest margin-lr">Guest Log in</button>

          <div className="session-form-footer">New to GetStarted? {this.signupLink()}</div>
        </form>
      </header>
    )

  }

}

export default connect(null, mdp)(LoginComponent);