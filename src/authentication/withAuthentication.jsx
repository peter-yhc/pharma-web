import React, { useEffect, useState } from 'react';
import { checkToken } from 'api/PharmaApi';
import { Redirect } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => () => {
  const [authenticated, setAuthenticated] = useState('checking');

  useEffect(() => {
    checkToken()
      .then(() => setAuthenticated('good'))
      .catch(() => setAuthenticated('bad'));
  }, []);

  const show = () => {
    switch (authenticated) {
      case 'good': {
        return <WrappedComponent />;
      }
      case 'bad': {
        return <Redirect to="/login" />;
      }
      default: {
        return <span>Checking token</span>;
      }
    }
  };

  return (
    show()
  );
};

export default withAuthentication;
