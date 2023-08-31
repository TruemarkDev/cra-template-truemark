import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

import ROUTES from "constants/routes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
