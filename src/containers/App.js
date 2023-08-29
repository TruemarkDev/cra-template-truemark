import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

import ROUTES from "constants/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
