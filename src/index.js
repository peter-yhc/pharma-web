/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import {BrowserRouter} from 'react-router-dom';
import {getPatients} from 'api/PharmaApi';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from 'store'

// const auth = {
//   authenticated: undefined,
//   setAuthenticated(value) {
//     this.authenticated = value;
//   },
// };
//
// const patients = {
//   data: [],
//   reload() {
//     getPatients().then((result) => {
//       console.log('done', this.data);
//       this.data = result;
//       console.log('done', this.data);
//     }).catch(() => auth.setAuthenticated(false));
//   },
// };

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
