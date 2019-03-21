import React, { Component } from "react";

// name the workout => check unique
// enter friend's name + phone number
// custom message => text area
// send button

const Challenge = props => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Friend's name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              style={{ marginTop: 20 }}
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Custom message"
              rows="3"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Challenge;
