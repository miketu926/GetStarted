import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, clearErrors, receiveSessionErrors } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailClick, setEmailClick] = useState(false);
  const [passwordClick, setPasswordClick] = useState(false);

  const errors = useSelector(({ errors }) => {
    return errors.errors || [];
  });

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === confirmEmail && password === confirmPassword) {
      createUser({ email, password })(dispatch);
    } else {
      dispatch(receiveSessionErrors(["Email and/or password do not match"]));
    }
  };

  const errorsList = errors.map((error, idx) => {
    return (<li key={idx} className='li'>{error}</li>);
  })

  return (
    <header className='login-form'>
      <form className='signup-form-box' onSubmit={handleSubmit}>
        <div className='margin-lr session-form-header'>Have an account? <Link to='/login'>Log in</Link></div>
        <p className='p-h2 margin-lr margin-top'>Sign up</p>

        {errorsList.length > 0 ? <ul className='errors margin-lr'>{errorsList} </ul> : null}

        <input className='session-input margin-lr transition'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input className='session-input margin-lr transition'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onSelect={() => setEmailClick(true)} />

        {emailClick ?
          <input className='session-input margin-lr transition'
            type="email"
            placeholder="Re-enter email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          /> : null}

        <input className='session-input margin-lr transition'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onSelect={() => setPasswordClick(true)} />

        {passwordClick ?
          <input className='session-input margin-lr transition'
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> : null}


        {/* <div className='for-now margin-lr'>CHECKBOX. Receive a weekly mix of handpicked projects, plus occasional GetStarted news.</div> */}
        <input className='session-submit margin-lr' type="submit" value="Create Account" />
        <div className='for-now margin-lr'>By signing up, you agree to our terms of use, privacy policy, and cookie policy.</div>

        <div className="divider margin-lr">
          <div className="line"></div>
          <div className="txt">or</div>
        </div>

        <Link to='/login' className="demo-submit demo margin-lr">Log in as guest</Link>
      </form>
    </header>
  )
}
export default SignupComponent