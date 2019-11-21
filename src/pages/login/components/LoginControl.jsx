import React from 'react';
import styles from 'pages/login/components/LoginControl.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'common';
import { setAuthenticated } from 'store/actions';

const LoginControl = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    authenticated
      ? (
        <div className={styles.loginControl}>
          <i className="la la-user" />
          <span>{JSON.parse(atob(localStorage.getItem('pharma.token').split('.')[1])).username}</span>
          <Button className={styles.logout} onClick={logout}>
              Logout
          </Button>
        </div>
      )
      : ''
  );
};

export default LoginControl;
