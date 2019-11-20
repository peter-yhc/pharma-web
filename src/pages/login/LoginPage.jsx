import React, { useReducer, useState, useContext } from 'react';
import { adminLogin } from 'api/PharmaApi';
import { Link, Redirect } from 'react-router-dom';
import {
  Input, LoadingButton, PageTitle, Button,
} from 'common';
import styles from 'pages/login/LoginPage.module.scss';
import AuthContext from 'context/AuthContext';

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
  const [state, dispatch] = useReducer(reducer, { formStatus: 'clean' });
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const authContext = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ state: 'working' });
    try {
      await adminLogin(username, password);
      authContext.setAuthenticated(true);
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
                <LoadingButton className={styles.loadingButton}>Loading</LoadingButton>
              )
              : (
                <Button className={styles.loginButton} type="submit" disabled={!username && !password}>
                  Login
                </Button>
              )}
          </form>
        </section>
      )
  );
};

export default LoginPage;
