import React from 'react';
import { login } from 'api/PharmaApi';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    login().then(() => {
      // redirect
    });
  };

  return (
    <section className={styles.page}>
      <h2 className={styles.pageTitle}>
        Sign in
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <a className={styles.signupLink} href="/signup">Need an account?</a>
        <button className={styles.signInButton} type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
