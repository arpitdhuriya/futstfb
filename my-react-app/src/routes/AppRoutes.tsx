import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import UserManagementPage from '../components/UserManagementPage';
import LandingPageAdmin from '../components/LandingPageAdmin';
import LandingPageUser from '../components/LandingPageUser';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/user-management" component={UserManagementPage} />
        <Route path="/admin" component={LandingPageAdmin} />
        <Route path="/user" component={LandingPageUser} />
        <Route path="/" exact component={LandingPageUser} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;