import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <section className={styles.page}>
    <h2 className={styles.pageTitle}>
      Sign in
    </h2>
    <form className={styles.form}>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="Password" />
      <button className={styles.signInButton} type="submit">
        Sign in
      </button>
    </form>
  </section>
);

export default LoginPage;
