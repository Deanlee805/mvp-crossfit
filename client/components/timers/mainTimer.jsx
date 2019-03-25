import React, { Component } from "react";
import $ from "jquery";
import prettyMs from "pretty-ms";
import DropDown from "./dropDown";

class MainTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      timeLimit: 0,
      toggle: "off",
      workouts: {
        Amanda: 840000,
        Angie: 1680000,
        Annie: 660000,
        Barbara: 480000
      }
    };
    this.clock = null;
    this.clockIncremental = this.clockIncremental.bind(this);
    this.clockDecremental = this.clockDecremental.bind(this);
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handleClearTimer = this.handleClearTimer.bind(this);
  }

  componentDidMount() {
    // update workout state
    var newData = "";
    $.get("/workout")
      .then(workoutList => {
        console.log(workoutList);
        this.setState({
          workouts: workoutList
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  handleWorkoutChange(event) {
    console.log(event.target.value);
    if (event.target.value !== "Select the workout") {
      const selectedWorkoutTimeLimit = this.state.workouts[event.target.value];
      this.setState({
        timeLimit: selectedWorkoutTimeLimit,
        currentTime: selectedWorkoutTimeLimit
      });
    }
  }

  handleSetTimer() {
    if (this.state.toggle === "off") {
      // if workout is for time => clockIncremental
      // if workout is AMRAP => clockDecremental

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
        <div
          className="container"
          style={{
            display: "grid",
            margin: "auto",
            textAlign: "center",
            marginTop: "300px"
          }}
        >
          <DropDown
            workouts={this.state.workouts}
            onWorkoutChange={this.handleWorkoutChange}
          />
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
