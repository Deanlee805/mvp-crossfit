import React, { Component } from "react";
import prettyMs from "pretty-ms";
import NavBar from "../navBar";
import DropDown from "./dropDown";

class MainTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      timeLimit: 2000,
      toggle: "off",
      workouts: {
        Fran: Math.floor(Math.random() * 10) * 10000,
        Helen: Math.floor(Math.random() * 10) * 10000,
        Christine: Math.floor(Math.random() * 10) * 10000
      }
    };
    this.clock = null;
    this.clockIncremental = this.clockIncremental.bind(this);
    this.clockDecremental = this.clockDecremental.bind(this);
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
  }

  componentDidMount() {
    // update state
  }

  clockIncremental() {
    const newTime = this.state.currentTime + 1;
    if (newTime === this.state.timeLimit) {
      alert("Time is up!");
      this.handleClearTimer();
    } else {
      this.setState({
        currentTime: newTime,
        toggle: "on"
      });
    }
  }

  clockDecremental() {
    const newTime = this.state.currentTime - 1;
    if (this.state.currentTime <= 0) {
      alert("Time is up!");
      this.handleClearTimer();
    } else {
      this.setState({
        currentTime: newTime,
        toggle: "on"
      });
    }
  }

  handleSetTimer() {
    if (this.state.toggle === "off") {
      // if workout is for time => clockIncremental
      // if workout is AMRAP => clockDecremental

      this.clock = setInterval(this.clockIncremental, 1);
    }
    if (this.state.toggle === "on") {
      clearInterval(this.clock);
      this.setState({
        toggle: "off"
      });
    }
  }

  handleClearTimer() {
    clearInterval(this.clock);
    console.log(this.clock);
    this.setState({
      currentTime: 0,
      toggle: "off"
    });
  }

  render() {
    let label = null;
    if (this.state.toggle === "off") {
      label = "Start timer";
    } else {
      label = "Stop timer";
    }

    return (
      <React.Fragment>
        <NavBar />

        <div
          className="container"
          style={{
            display: "grid",
            margin: "auto",
            textAlign: "center",
            marginTop: "300px"
          }}
        >
          <DropDown workouts={this.state.workouts} />
          <h1>
            {prettyMs(this.state.currentTime, {
              verbose: true
            })}
          </h1>
          <button
            className="btn btn-outline-primary w-50"
            style={{ margin: "auto", marginTop: 5 }}
            onClick={this.handleSetTimer}
          >
            {label}
          </button>
          <button
            className="btn btn-outline-primary w-50"
            style={{ margin: "auto", marginTop: 5 }}
            onClick={this.handleClearTimer}
          >
            Clear timer
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MainTimer;
