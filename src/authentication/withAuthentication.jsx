import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const withAuthentication = (WrappedComponent) => () => {
  const authenticated = useSelector((state) => state.authenticated);

  return (
    authenticated
      ? <WrappedComponent />
      : <Redirect to="/login" />
  );
};

export default withAuthentication;
