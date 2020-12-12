import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthWrapper from './components/AuthWrapper';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <AuthWrapper>
      <Router>
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
      </Router>
    </AuthWrapper>
  );
}

export default App;
