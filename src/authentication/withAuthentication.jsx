import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from 'authentication/AuthContext';

const withAuthentication = (WrappedComponent) => () => {
  const authContext = useContext(AuthContext);

  return (
    authContext.authenticated
      ? <WrappedComponent />
      : <Redirect to="/login" />
  );
};

export default withAuthentication;
