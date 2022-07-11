import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./views";

const routes = [{ path: "/", component: Home }];

const App = () => {
  return (
    <Router>
      <div>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </div>
    </Router>
  );
};

export default App;
