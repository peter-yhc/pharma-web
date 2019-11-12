import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginControl from 'authentication/LoginControl';
import Title from 'layout/Title';
import PatientEditorPage from './patient/PatientEditorPage';
import LoginPage from './authentication/LoginPage';
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
        </Switch>
      </article>
    </main>
  );
}

export default App;
