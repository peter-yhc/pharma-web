import React, { useReducer, useState, useEffect } from 'react';
import { adminLogin } from 'api/PharmaApi';
import { Link, Redirect } from 'react-router-dom';
import {
  Input, LoadingButton, PageTitle, Button,
} from 'common';
import styles from 'pages/login/LoginPage.module.scss';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from 'store/actions';

function reducer(state, action) {
  switch (action.state) {
    case 'dirty':
      return { formStatus: 'dirty' };
    case 'error':
      return { formStatus: 'error' };
    case 'working':
      return { formStatus: 'working' };
    case 'success':
      return { formStatus: 'success' };
    default:
      return { formStatus: 'clean' };
  }
}

const LoginPage = () => {
  const reduxDispatch = useDispatch();
  const [state, dispatch] = useReducer(reducer, { formStatus: 'clean' });
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ state: 'working' });
    try {
      await adminLogin(username, password);
      reduxDispatch(setAuthenticated(true));
      dispatch({ state: 'success' });
    } catch (error) {
      dispatch({ state: 'error' });
      setTimeout(() => dispatch({ state: 'dirty' }), 1000);
    }
  };

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    state.formStatus === 'success'
      ? <Redirect to="/" />
      : (
        <section className={styles.page}>
          <PageTitle>Login</PageTitle>
          <Link className={styles.signupLink} to="/signup">Need an account?</Link>
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Username" onChange={handleUsernameInput} />
            <Input type="password" placeholder="Password" onChange={handlePasswordInput} />
            <div className={[styles.error, state.formStatus === 'error' ? styles.show : null].join(' ')}>
              <span>Incorrect username or password</span>
            </div>
            {state.formStatus === 'working'
              ? (
                <LoadingButton className={styles.sharedButtonStyle}>Loading</LoadingButton>
              )
              : (
                <Button className={styles.sharedButtonStyle} type="submit" disabled={!(username && username.length > 0 && password && password.length > 0)} variant="blue">
                  Login
                </Button>
              )}
          </form>
        </section>
      )
  );
};

export default LoginPage;
