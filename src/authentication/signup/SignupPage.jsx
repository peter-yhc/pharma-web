import React, { useState, useRef } from 'react';
import { Input, PageTitle, Button } from 'common';
import styles from './SignupPage.module.scss';

const SignupPage = () => {
  const [username, setUsername] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [authKey, setAuthKey] = useState(undefined);
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

  return (
    <section className={styles.page}>
      <PageTitle>Sign up</PageTitle>
      <form className={styles.form} ref={formRef}>
        <p>
          * To sign up as an administrator you will need to have the authentication key of the application.
        </p>
        <Input type="text" placeholder="Username" onChange={handleUsernameChange} value={username} />
        <Input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
        <Input type="password" placeholder="Authentication Key" onChange={handleAuthKeyChange} value={authKey} />
        <Button type="submit" disabled={formRef.current && !formRef.current.checkValidity()}>Sign up</Button>
      </form>
    </section>
  );
};

export default SignupPage;
