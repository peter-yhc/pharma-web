import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginControl from 'authentication/login/LoginControl';
import Title from 'layout/Title';
import SignupPage from 'authentication/signup/SignupPage';
import LoginPage from 'authentication/login/LoginPage';
import PatientEditorPage from './patient/PatientEditorPage';
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
          <Route exact path="/" component={PatientEditorPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </article>
    </main>
  );
}

export default App;
