import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

const msp = ({ errors }) => {
  return ({
    errors: errors.errors || []
  });
};

const mdp = (dispatch) => {

  return ({
    login: (formUser) => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
  });
};



class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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

  demoLogin(e) {
    e.preventDefault();
    const demo = { email: 'demo_user@getstarted.com', password: "demouser" };
    this.props.login(demo);
  }



  render() {
    
    // END EMAIL/PASSWORD APPEARANCE


    //ERRORS LIST
    const errorsList = this.props.errors.map((error, idx) => {
      return (<li key={idx} class='li'>{error}</li>);
    });

    let errorsBox = null;
    if (errorsList.length > 0) {
      errorsBox = (<ul className='errors margin-lr'>{errorsList}</ul>)
    }
    // END ERROR LIST

    return (
      <header className='login-form'>
        <form className='login-form-box' onSubmit={this.handleSubmit}>
          <p className='p-h2 margin-lr'>Log in</p>

          {errorsBox}

          <input className='session-input margin-lr transition'
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")} />

          <input className='session-input margin-lr transition'
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")} />

          <a href='./' className='login-forgot-password margin-lr'>Forgot your password?</a>
          <input className='session-submit margin-lr' type="submit" value="Log me in!" />
          {/* <div className='login-remember-me margin-lr'>Remember me CHECKBOX</div> */}
         
          <div className="divider margin-lr">
            <div className="line"></div>
            <div className="txt">or</div>
          </div>

          <button onClick={this.demoLogin} className="demo-submit demo margin-lr">Guest Log in</button>

          <div className="session-form-footer">New to GetStarted? {this.signupLink()}</div>
        </form>
      </header>
    )

  }

}

export default connect(msp, mdp)(LoginComponent);