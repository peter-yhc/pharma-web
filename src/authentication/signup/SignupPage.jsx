import React, { useState, useRef, useEffect } from 'react';
import { Input, PageTitle, Button } from 'common';
import { Redirect } from 'react-router-dom';
import styles from './SignupPage.module.scss';

const SignupPage = () => {
  const [username, setUsername] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [authKey, setAuthKey] = useState(undefined);
  const [disabled, setDisabled] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const formRef = useRef();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAuthKeyChange = (e) => {
    setAuthKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignupSuccess(true);
  };

  useEffect(() => {
    const anyFieldsEmpty = (!username || !email || !authKey);
    const invalidForm = (formRef.current && !formRef.current.checkValidity());
    setDisabled(anyFieldsEmpty || invalidForm);
  }, [username, email, authKey]);

  return (
    signupSuccess
      ? <Redirect to="/login" />
      : (
        <section className={styles.page}>
          <PageTitle>Sign up</PageTitle>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <p>
          * To sign up as an administrator you will need to have
          the authentication key of the application.
            </p>
            <Input type="text" placeholder="Username" onChange={handleUsernameChange} required />
            <Input type="email" placeholder="Email" onChange={handleEmailChange} required />
            <Input type="password" placeholder="Authentication Key" onChange={handleAuthKeyChange} required />
            <Button className={styles.signupButton} type="submit" disabled={disabled}>Sign up</Button>
          </form>
        </section>
      )
  );
};

export default SignupPage;
