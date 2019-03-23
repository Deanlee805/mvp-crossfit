import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Leaderboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Timer
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  );
};

export default NavBar;
