import React from "react";

// const CustomWod = props => {
//   const selectedMoves = Object.keys(props.customizedWod);

//   const formatWod = selectedMoves.map((move, index) => {
//     return (
//       <label key={index}>
//         {move}
// <input
//   onChange={props.onInput}
//   type="text"
//   name={move}
//   value={props.customizedWod[move]}
// />
//       </label>
//     );
//   });
//   return (
//     <div>
//       {console.log("props", props)}
//       <form style={{ display: "flex grid", flexFlow: "wrap" }}>
//         {formatWod}
//       </form>
//       <button onClick={props.onSubmit}>Submit</button>
//     </div>
//   );
// };
////////////////////////////////////////////////////////////////////////
const CustomWod = props => {
  const selectedMoves = Object.keys(props.customizedWod);

  const formatWod = selectedMoves.map((move, index) => {
    return (
      <tr key={index}>
        <td>{move}</td>
        <td>
          <input
            onChange={props.onInput}
            type="text"
            name={move}
            value={props.customizedWod[move]}
          />
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>{formatWod}</tbody>
      </table>
      <button
        className="btn btn-outline-primary"
        style={{ marginBottom: 5, marginTop: 5 }}
      >
        Submit
      </button>
    </div>
  );
};

export default CustomWod;
////////////////////////////////////////////////////////////////////////
