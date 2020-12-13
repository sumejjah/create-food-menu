import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './redux/store';
import AuthWrapper from './components/AuthWrapper';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard/components/Dashboard';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <ConnectedRouter history={history}>
      <AuthWrapper>
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard />
          </PrivateRoute>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </AuthWrapper>
    </ConnectedRouter>
  );
}

export default App;
