import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginControl from 'authentication/LoginControl';
import PatientEditorPage from './patient/PatientEditorPage';
import LoginPage from './authentication/LoginPage';
import styles from './App.module.css';

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <span className={styles.appTitle}>Pharma</span>
        <LoginControl />
      </header>
      <article className={styles.article}>
        <Switch>
          <Route exact path="/" component={PatientEditorPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </article>
    </main>
  );
}

export default App;
