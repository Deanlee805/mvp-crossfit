const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({
  origin: true
});
const bodyParser = require('body-parser');
const sendSms = require('./sendSms');
const template = require('./template');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors);

// app.get('/', (req, res) => {
//   const date = new Date();
//   const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
//   res.send(`
//     <!doctype html>
//     <head>
//       <title>Time</title>
//       <link rel="stylesheet" href="/style.css">
//       <script src="/script.js"></script>
//     </head>
//     <body>
//       <p>In London, the clock strikes:
//         <span id="bongs">${'BONG '.repeat(hours)}</span></p>
//       <button onClick="refresh(this)">Refresh</button>
//     </body>
//   </html>`);
// });

// app.get('/wod', (req, res) => {
//   res.sendFile('../public/index.html', options, (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Sent:', fileName);
//     }
//   });
// });

app.post('/workout', (req, res) => {
  console.log('message I got>>>>>', req.body);
  const message = req.body;
  const {
    customizedWod,
    workoutName,
    smsDetails
  } = req.body;

  const formatCustomizedWod = template.workoutTemplate(customizedWod)['formatWorkout'];
  sendSms.sendMessage(smsDetails.friendName, workoutName, formatCustomizedWod, smsDetails.message, smsDetails.phoneNum);
  res.send('ok');
});

exports.app = functions.https.onRequest(app);