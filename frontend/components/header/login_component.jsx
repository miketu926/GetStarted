import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';

function LoginComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const errors = useSelector(({ errors }) => {
    return errors.errors || [];
  });

  useEffect(() => {

    return () => {
      dispatch(clearErrors());
    };
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login({ email, password })(dispatch);
  // };

  const demoLogin = (e) => {
    e.preventDefault();
    const demo = { email: 'demo_user@getstarted.com', password: "demouser" };
    login(demo)(dispatch);
  };

  // const demoLoginHelper = (demoEmail, demoPassword) => {
  //   if (demoEmail.length > 0) {
  //     setEmail(email + demoEmail.shift());
  //     window.setTimeout(() => demoLoginHelper(demoEmail, password), 50);
  //   } else if (demoPassword.length > 0) {
  //     setPassword(password + demoPassword.shift())
  //     window.setTimeout(() => demoLoginHelper(demoEmail, demoPassword), 50);
  //   } else {
  //     login({ email, password })(dispatch);
  //   }
  // };

  // const demoLogin = (e) => {
  //   e.preventDefault();
  //   let demoEmail = 'demo_user@getstarted.com'.split('');
  //   let demoPassword = 'demouser'.split('');
  //   // let submit = document.getElementById('session-submit');
  //   // this.setState({ email: '', password: '' }, () => {
  //   demoLoginHelper(demoEmail, demoPassword);
  //   // });
  // };

  //ERRORS LIST
  const errorsList = errors.map((error, idx) => {
    return (<li key={idx} className='li'>{error}</li>);
  });

  return (
    <header className='login-form'>
      <form className='login-form-box' onSubmit={() => login({ email, password })(dispatch)}>
        <p className='p-h2 margin-lr'>Log in</p>

        {errorsList.length > 0 ? <ul className='errors margin-lr'>{errorsList}</ul> : null}

        <input className='session-input margin-lr transition'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input className='session-input margin-lr transition'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        {/* <a href='./' className='login-forgot-password margin-lr'>Forgot your password?</a> */}
        <input className='session-submit margin-lr' type="submit" value="Log me in!" />
        {/* <div className='login-remember-me margin-lr'>Remember me CHECKBOX</div> */}

        <div className="divider margin-lr">
          <div className="line"></div>
          <div className="txt">or</div>
        </div>

        <button onClick={(e) => demoLogin(e)} className="demo-submit demo margin-lr">Guest Log in</button>

        {/* <div className="session-form-footer">New to GetStarted? {signupLink()}</div> */}
        <div className="session-form-footer">New to GetStarted? <Link to='/signup'>Sign Up!</Link></div>
      </form>
    </header>
  )
}
export default LoginComponent