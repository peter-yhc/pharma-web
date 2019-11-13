import React, { useReducer, useState } from 'react';
import { login } from 'api/PharmaApi';
import { Redirect } from 'react-router-dom';
import { LoadingButton, Input, PageTitle } from 'common';
import styles from './LoginPage.module.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ state: 'working' });
    login(username, password).then(() => {
      // setTimeout(() => dispatch({ state: 'success' }), 1000);

      // dispatch({ state: 'success' });
    }).catch(() => {
      dispatch({ state: 'error' });
      setTimeout(() => dispatch({ state: 'dirty' }), 1000);
    });
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
        <>
          <section className={styles.page}>
            <PageTitle>Sign in</PageTitle>
            <a className={styles.signupLink} href="/signup">Need an account?</a>
            <form className={styles.form} onSubmit={handleSubmit}>
              <Input type="text" placeholder="Username" onChange={handleUsernameInput} />
              <Input type="password" placeholder="Password" onChange={handlePasswordInput} />
              <div className={[styles.error, state.formStatus === 'error' ? styles.show : null].join(' ')}>
                <span>Incorrect username or password</span>
              </div>
              { state.formStatus === 'working'
                ? (
                  <LoadingButton className={styles.loadingButton}>Loading</LoadingButton>
                )
                : (
                  <button className={styles.signInButton} type="submit" disabled={!username && !password}>
                  Sign in
                  </button>
                )}
            </form>
          </section>
        </>
      )
  );
};

export default LoginPage;
