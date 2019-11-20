/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import {BrowserRouter} from 'react-router-dom';
import AuthContext from 'context/AuthContext';
import * as serviceWorker from './serviceWorker';

const auth = {
  authenticated: undefined,
  setAuthenticated(value) {
    this.authenticated = value;
  },
};

ReactDOM.render(
  <BrowserRouter>
    <AuthContext.Provider value={auth}>
      <App/>
    </AuthContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
