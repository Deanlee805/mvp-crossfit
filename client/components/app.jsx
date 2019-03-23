import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Wod from "./wod/wod";
import MainTimer from "./timers/mainTimer";

const App = props => {
  const routes = [
    {
      path: "/",
      exact: true,
      navBar: () => <div>home!</div>,
      main: () => <Wod />
    },
    {
      path: "/timer",
      navBar: () => <div>bubblegum!</div>,
      main: () => <MainTimer />
    }
  ];

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/timer">
              Timer
            </Link>
          </li>
        </ul>
      </nav>

      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </Router>
  );
};

export default App;
