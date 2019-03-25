import React from "react";

const CustomWod = props => {
  const selectedMoves = Object.keys(props.customizedWod);

  const formatWod = selectedMoves.map((move, index) => {
    return (
      <tr key={index}>
        <td>{move}</td>
        <td>
          <input
            type="text"
            name={move}
            value={props.customizedWod[move]}
            onChange={props.onInput}
          />
        </td>
      </tr>
    );
  });
  return (
    <div>
      <input
        style={{ marginTop: 5, marginBottom: 5 }}
        type="text"
        className="form-control w-50"
        placeholder="Name your workout"
        name="workoutName"
        value={props.workoutName}
        onChange={props.onNaming}
      />
      <input
        style={{ marginTop: 5, marginBottom: 5 }}
        type="text"
        className="form-control w-50"
        placeholder="Time Limit (minute)"
        name="timeLimit"
        value={props.timeLimit}
        onChange={props.onSetTime}
      />
      <div className="input-group mb-3 w-50">
        <div className="input-group-prepend">
          <label className="input-group-text" for="inputGroupSelect01">
            Style
          </label>
        </div>
        <select className="custom-select" id="inputGroupSelect01">
          <option defaultValue>Choose...</option>
          <option value="1">ARAMP</option>
          <option value="2">For time</option>
        </select>
      </div>

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Exercise</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>{formatWod}</tbody>
      </table>
    </div>
  );
};

export default CustomWod;
