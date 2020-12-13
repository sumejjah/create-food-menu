import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

import store from './redux/store';
import './index.css';
import App from './App';
// import { GithubProvider } from './context/context';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN_AUTH0}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
