import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginControl from 'pages/login/components/LoginControl';
import { Button, Title } from 'common';
import SignupPage from 'pages/signup/SignupPage';
import LoginPage from 'pages/login/LoginPage';
import withAuthentication from 'authentication/withAuthentication';
import PatientEditorPage from './pages/patient/PatientEditorPage';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title />
        <LoginControl />
      </header>
      <article className={styles.article}>
        <Switch>
          <Route exact path="/" component={withAuthentication(PatientEditorPage)} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route
            exact
            path="/testpage"
            component={() => (
              <>
                <Button variant="blue">Test Button</Button>
                <Button variant="green">Test Button</Button>
                <Button>Test Button</Button>
                <Button disabled>Test Button</Button>
              </>
            )}
          />
        </Switch>
      </article>
    </main>
  );
}

export default App;
