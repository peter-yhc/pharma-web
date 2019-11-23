import React, { useState, useRef, useEffect } from 'react';
import { Input, PageTitle, Button } from 'common';
import { adminSignup } from 'api/PharmaApi';
import { Redirect } from 'react-router-dom';
import styles from './SignupPage.module.scss';

const SignupPage = () => {
  const [username, setUsername] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [repeatPassword, setRepeatPassword] = useState(undefined);
  const [disabled, setDisabled] = useState(true);
  const [successRedirect, setRedirect] = useState(false);
  // const [error, setError] = useState(undefined);
  const formRef = useRef();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adminSignup({
      username,
      email,
      password,
      repeatPassword,
    }).then(() => {
      setRedirect(true);
    }).catch((error) => {
      console.log('sign up fail', error);
    });
  };

  useEffect(() => {
    const anyFieldsEmpty = (!username || !email || !password);
    const invalidForm = (formRef.current && !formRef.current.checkValidity());
    const passwordsDontMatch = password !== repeatPassword;
    setDisabled(anyFieldsEmpty || invalidForm || passwordsDontMatch);
  }, [username, email, password, repeatPassword]);

  return (
    successRedirect
      ? <Redirect to="/login" />
      : (
        <section className={styles.page}>
          <PageTitle>Sign up</PageTitle>
          <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Username" onChange={handleUsernameChange} required />
            <Input type="email" placeholder="Email" onChange={handleEmailChange} required />
            <Input type="password" placeholder="Password" onChange={handlePasswordChange} required />
            <Input type="password" placeholder="Repeat Password" onChange={handleRepeatPasswordChange} required />
            <Button className={styles.signupButton} type="submit" variant="blue" disabled={disabled}>Sign up</Button>
          </form>
        </section>
      )
  );
};

export default SignupPage;
