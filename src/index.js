/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from 'context/AuthContext';
import PatientContext from 'context/PatientContext';
import { getPatients } from 'api/PharmaApi';
import * as serviceWorker from './serviceWorker';

const auth = {
  authenticated: undefined,
  setAuthenticated(value) {
    this.authenticated = value;
  },
};

const patients = {
  data: [],
  reload() {
    getPatients().then((result) => {
      console.log('done', this.data);
      this.data = result;
      console.log('done', this.data);
    }).catch(() => auth.setAuthenticated(false));
  },
};

ReactDOM.render(
  <BrowserRouter>
    <AuthContext.Provider value={auth}>
      <PatientContext.Provider value={patients}>
        <App />
      </PatientContext.Provider>
    </AuthContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
