const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const sendSms = require('./sendSms');
const template = require('./template');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.send('test server'));

// message I got>>>>> { customizedWod: { 'wall balls': '1', row: '1', 'box jumps': '1' },
//   workoutName: 'Workout!',
//   smsDetails:
//    { friendName: 'Dean',
//      message: 'Testing workout',
//      phoneNum: '6509961385' } }

app.post('/workout', (req, res) => {
  // console.log('message I got>>>>>', req.body);
  // sendSms.sendMessage();
  const message = req.body;
  const {
    customizedWod,
    workoutName,
    smsDetails
  } = req.body;

  const formatCustomizedWod = template.workoutTemplate(customizedWod)['formatWorkout'];
  // console.log('customizedWod', template.workoutTemplate(customizedWod)['formatWorkout']);
  sendSms.sendMessage(smsDetails.friendName, workoutName, formatCustomizedWod, smsDetails.message, smsDetails.phoneNum);
  res.send('ok');
});


// app.post('/sms', (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');
//   console.log('message I got>>>>>', req.body);
//   res.writeHead(200, {
//     'Content-Type': 'text/xml'
//   });
//   res.end(twiml.toString());
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))