import React, { Component } from "react";
import prettyMs from "pretty-ms";
import NavBar from "../navBar";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 2000,
      timeLimit: 2000,
      toggle: "off"
    };
    this.clock = null;
    this.clockDecremental = this.clockDecremental.bind(this);
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
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
      this.clock = setInterval(this.clockDecremental, 1);
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
      currentTime: this.state.timeLimit,
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

export default CountDown;
