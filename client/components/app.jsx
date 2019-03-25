import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SignInScreen from "./login";
import Wod from "./wod/wod";
import MainTimer from "./timers/mainTimer";

// TODO : Add in leaderboard component
// Debug why prod version can't send message
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "login",
      currentUser: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: event.target.name
    });
  }

  handleLogin(user) {
    this.setState({
      currentUser: user
    });
  }

  render() {
    const routes = [
      {
        path: "/wod",
        exact: true,
        main: () => <Wod />
      },
      {
        path: "/",
        exact: true,
        main: () => <SignInScreen />
      },
      {
        path: "/timer",
        exact: true,
        main: () => <MainTimer />
      }
    ];

    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mr-auto">
            <li
              className={
                this.state.currentPage === "login"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              {/* TODO: disable tabs when its on login */}
              <Link
                className="nav-link"
                to="/"
                onClick={this.handleClick}
                name="login"
              >
                Login
              </Link>
            </li>
            <li
              className={
                this.state.currentPage === "wod"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link
                className="nav-link"
                to="/wod"
                onClick={this.handleClick}
                name="wod"
              >
                Home
              </Link>
            </li>
            <li
              className={
                this.state.currentPage === "timer"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link
                className="nav-link"
                to="/timer"
                onClick={this.handleClick}
                name="timer"
              >
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
  }
}

export default App;
