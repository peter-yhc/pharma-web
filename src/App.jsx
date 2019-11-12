import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PatientEditorPage from './patient/PatientEditorPage';
import LoginPage from './authentication/LoginPage';


function App() {
  return (
    <main className="App">
      <header />
      <article>
        <Switch>
          <Route exact path="/" component={PatientEditorPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </article>
    </main>
  );
}

export default App;
