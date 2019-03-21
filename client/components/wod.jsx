import React, { Component } from "react";
import CustomWod from "./customWod";
import Challenge from "./challenge";

class Wod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movementLib: ["wall balls", "row", "box jumps", "snatch"],
      wodSelectedTemp: [],
      customizedWod: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // fetch("/api").then(res => {
    //   console.log("fetched data", res);
    // });
  }

  handleClick() {
    // initate customizedWod template
    const customizedWodTemplate = {};
    this.state.wodSelectedTemp.forEach(moveSelected => {
      customizedWodTemplate[moveSelected] = "";
    });

    this.setState({
      customizedWod: customizedWodTemplate
    });
  }

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

  handleInput(event) {
    console.log("input event", event.target.value);
    console.log("input event", event.target);
    // make a copy of customizedWod
    const customizedWodTemp = Object.assign({}, this.state.customizedWod);
    // change value
    customizedWodTemp[event.target.name] = event.target.value;
    // set state

    this.setState({
      customizedWod: customizedWodTemp
    });
  }

  handleSubmit(event) {
    // send ajax request to backend
    console.log("clicked");
  }

  render() {
    const movementsList = this.state.movementLib.map(movement => (
      <option value={movement}>{movement}</option>
    ));

    return (
      <div className="container">
        <h1 style={{ marginBottom: 5, marginTop: 15 }}>Step 1: Select WOD</h1>
        <select
          className="form-control"
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
        </h1>
        <CustomWod
          customizedWod={this.state.customizedWod}
          onInput={this.handleInput}
          onSubmit={this.handleSubmit}
        />
        <h1 style={{ marginBottom: 15, marginTop: 15 }}>
          Step 3: Challenge a friend!
        </h1>
        <Challenge />
      </div>
    );
  }
}

export default Wod;
