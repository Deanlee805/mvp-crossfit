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
              name="friendName"
              value={props.smsDetails.friendName}
              onChange={props.onInput}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone number" // validate phone number
              name="phoneNum"
              value={props.smsDetails.phoneNum}
              onChange={props.onInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea
              style={{ marginTop: 5 }}
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Custom message"
              name="message"
              value={props.smsDetails.message}
              onChange={props.onInput}
              rows="3"
            />
          </div>
        </div>
      </form>
      <button
        className="btn btn-outline-primary"
        style={{ marginBottom: 5, marginTop: 5 }}
        onClick={props.onSubmit}
      >
        Send
      </button>
    </div>
  );
};

export default Challenge;
