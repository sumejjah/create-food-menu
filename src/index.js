import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Auth0Provider
    domain="dev-n78wz2q4.eu.auth0.com"
    clientId="uFPi7X3D6b6mZwIGel5O64LNlPlHmC1U"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
