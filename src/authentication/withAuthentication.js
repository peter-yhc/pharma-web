import LoginPage from 'authentication/login/LoginPage';

const withAuthentication = (component) => {
  if (true) {
    return component;
  }
  return LoginPage;
};

export default withAuthentication;
