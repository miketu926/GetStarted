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
      <div className='signup-link'>
        <Link to='/signup'>Sign Up!</Link>
      </div>
    );
  }

  render() {

    return (
      <header className='login-form'>

        <form onSubmit={this.handleSubmit}>
          <label>Log in</label>
            <input 
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update("email")} />

            <input
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")} />

              <h4>Forgot your password? MODAL</h4>
              <button>Log me in!</button>
              <h5>Remember me CHECKBOX</h5>
              <h4>New to GetStarted? {this.signupLink()}</h4>
        </form>
      </header>
    )

  }

}

export default connect(null, mdp)(LoginComponent);