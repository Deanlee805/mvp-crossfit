import React, { Component } from "react";

const DropDown = props => {
  const workouts = Object.keys(props.workouts);

  const workoutList = workouts.map((workout, index) => {
    return (
      <option value={workout} key={index}>
        {workout}
      </option>
    );
  });

  return (
    <select
      className="custom-select w-50"
      style={{
        margin: "auto",
        textAlign: "center",
        marginBottom: "80px"
      }}
    >
      <option defaultValue>Select the workout</option>
      {workoutList}
    </select>
  );
};

export default DropDown;

// class Dropdown extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false
//     };
//     this.toggleOpen = this.toggleOpen.bind(this);
//   }
//   toggleOpen() {
//     this.setState({ isOpen: !this.state.isOpen });
//   }

//   render() {
//     const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

//     return (
//       <div className="dropdown" onClick={this.toggleOpen}>
//         <button
//           className="btn btn-secondary dropdown-toggle"
//           type="button"
//           id="dropdownMenuButton"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Dropdown button
//         </button>
//         <div className={menuClass} aria-labelledby="dropdownMenuButton">
//           <a className="dropdown-item" href="#">
//             Action
//           </a>
//           <a className="dropdown-item" href="#">
//             Another action
//           </a>
//           <a className="dropdown-item" href="#">
//             Something else here
//           </a>
//         </div>
//       </div>
//     );
//   }
// }
