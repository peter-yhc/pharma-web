import LoginPage from "./LoginPage";

const withAuthentication = component => {
  if (true) {
    return component
  } else {
    return LoginPage
  }
}

export default withAuthentication;