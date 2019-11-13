import React from 'react';
import styles from 'authentication/login/LoginControl.module.css';

const LoginControl = () => {
  console.log('login control');

  return (
    <div className={styles.loginControl}>
      <i className="la la-user" />
      <span>Admin</span>
    </div>
  );
};

export default LoginControl;
