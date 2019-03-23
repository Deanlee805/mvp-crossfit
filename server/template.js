const messageTemplate = (friendName, workoutName, workout, message) => {
  return (
    `Hey ${friendName}!
    Here is the workout:
    ${workoutName}
    ${workout}\n
    ${message}\n
    Reply with your time\n`
  )
}

const workoutTemplate = (workout) => {
  const movements = Object.keys(workout);
  const formatWorkout = movements.reduce((accumulator, currentValue) => {
    return `${accumulator}\n ${currentValue}: ${workout[currentValue]}`
  }, "");
  return ({
    formatWorkout
  })
}

module.exports.messageTemplate = messageTemplate;
module.exports.workoutTemplate = workoutTemplate;