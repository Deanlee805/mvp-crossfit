const firebase = require('firebase');

const config = {
  apiKey: "",
  authDomain: "mvp-crossfit.firebaseapp.com",
  databaseURL: "https://mvp-crossfit.firebaseio.com",
  projectId: "mvp-crossfit",
  storageBucket: "mvp-crossfit.appspot.com",
  messagingSenderId: "74764818365"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Get a reference to the database service
var database = firebase.database().ref();
var workouts = database.child('workout');

const readWodData = () => {
  return new Promise((resolve, reject) => {
    workouts.once('value').then((snapshot) => {
      var data = snapshot.exportVal();
      resolve(data);
    }, (error) => {
      reject(error);
    })
  })
}

const writeWodData = (workoutName, timelimit) => {
  let wodList = "";

  readWodData().then((newData) => {
    wodList = Object.assign({}, newData);
    wodList[workoutName] = parseInt(timelimit)

    console.log("wodList", wodList);
    workouts.set(wodList);
  })

}

module.exports.readWodData = readWodData;
module.exports.writeWodData = writeWodData;


// https://firebase.google.com/docs/database/web/structure-data