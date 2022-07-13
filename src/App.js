import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./utils/routes";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.component()}
            exact
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
