import LoginPage from './LoginPage';

const withAuthentication = (component) => {
  if (true) {
    return component;
  }
  return LoginPage;
};

export default withAuthentication;
