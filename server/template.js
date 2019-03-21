const messageTemplate = (friendName, workoutName, workout, message) => {
  return (
    `Hey ${friendName}!\n
    Here is the workout:\n
    ${workoutName}\n
    ${workout}\n\n
    ${message}\n
    Reply with your time\n`
  )
}

const workoutTemplate = (workout) => {
  const movements = Object.keys(workout);
  const reps = Object.values(workout);


  return (
    `Hey ${friendName}!\n
    Here is the workout:\n
    ${workoutName}\n
    ${workout}\n\n
    ${message}\n
    Reply with your time\n`
  )
}





module.exports.messageTemplate = messageTemplate;
module.exports.workoutTemplate = workoutTemplate;