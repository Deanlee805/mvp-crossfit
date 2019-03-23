import React, { Component } from "react";
import $ from "jquery";
import CustomWod from "./customWod";
import Challenge from "./challenge";

// hash phone number and use it as key?
// name : time
class Wod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movementLib: ["wall balls", "row", "box jumps", "snatch"],
      wodSelectedTemp: [],
      customizedWod: {},
      workoutName: "",
      // later might refactor into an obj
      smsDetails: { friendName: "", message: "", phoneNum: "" }
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleNaming = this.handleNaming.bind(this);
    this.handleCustomizeWod = this.handleCustomizeWod.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // fetch("/api").then(res => {
    //   console.log("fetched data", res);
    // });
  }

  // Step 1: Select WOD
  handleClick() {
    const customizedWodTemplate = {};
    this.state.wodSelectedTemp.forEach(moveSelected => {
      customizedWodTemplate[moveSelected] = "";
    });

    this.setState({
      customizedWod: customizedWodTemplate
    });
  }

  // Step 1: Select WOD
  handleSelect(event) {
    console.log(event.target.options);
    const leftPanel = event.target.options;
    var updated = Array.prototype.filter.call(leftPanel, function(move) {
      return move.selected;
    });
    var arr = [];
    updated.forEach(move => {
      arr.push(move.value);
    });
    console.log(arr);
    this.setState({
      wodSelectedTemp: arr
    });
  }

  // Step 2: Customize WOD
  handleCustomizeWod(event) {
    const customizedWodTemp = Object.assign({}, this.state.customizedWod);
    customizedWodTemp[event.target.name] = event.target.value;
    this.setState({
      customizedWod: customizedWodTemp
    });
  }

  handleNaming(event) {
    this.setState({
      workoutName: event.target.value
    });
  }

  // Step 3: Challenge a friend!
  handleInput(event) {
    const smsDetailsTemp = Object.assign({}, this.state.smsDetails);
    smsDetailsTemp[event.target.name] = event.target.value;
    this.setState({
      smsDetails: smsDetailsTemp
    });
  }

  // Step 3: Challenge a friend!
  handleSubmit(event) {
    // send ajax request to backend
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      }
    };

    $.post("/workout", {
      customizedWod: this.state.customizedWod,
      workoutName: this.state.workoutName,
      smsDetails: this.state.smsDetails
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("clicked");
  }

  render() {
    const movementsList = this.state.movementLib.map(movement => (
      <option value={movement}>{movement}</option>
    ));

    return (
      <React.Fragment>
        <div className="container">
          <h1 style={{ marginBottom: 5, marginTop: 15 }}>
            Step 1: Select WOD
            <span className="fa-1x" style={{ marginLeft: 15 }}>
              <i className="fas fa-dumbbell" />
            </span>
          </h1>

          <select
            className="form-control w-50"
            multiple={true}
            onChange={this.handleSelect}
          >
            {movementsList}
          </select>
          <button
            className="btn btn-outline-primary"
            style={{ marginBottom: 5, marginTop: 5 }}
            onClick={this.handleClick}
          >
            Save
          </button>
          <h1 style={{ marginBottom: 5, marginTop: 15 }}>
            Step 2: Customize WOD
            <span className="fa-1x" style={{ marginLeft: 15 }}>
              <i className="fas fa-user-ninja" />
            </span>
          </h1>
          <CustomWod
            customizedWod={this.state.customizedWod}
            workoutName={this.state.workoutName}
            onInput={this.handleCustomizeWod}
            onNaming={this.handleNaming}
          />
          <h1 style={{ marginBottom: 15, marginTop: 15 }}>
            Step 3: Challenge a friend!
            <span className="fa-1x" style={{ marginLeft: 15 }}>
              <i className="fas fa-sms" />
            </span>
          </h1>
          <Challenge
            smsDetails={this.state.smsDetails}
            onInput={this.handleInput}
            onSubmit={this.handleSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Wod;
