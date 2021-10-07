import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route to="/edit">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
