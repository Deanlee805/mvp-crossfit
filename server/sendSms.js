const dotenv = require('dotenv');
console.log('__dirname', __dirname);
const result = dotenv.config({
  path: __dirname + '/.env'
});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const template = require('./template');

// create a helper function to send sms messages
// variables: phone number, message (workout + custom messages)

// let message =
//   `Here is the workout:\n
// Fast and furious\n\n
// wallballs: 5 reps;\n
// row: 5 reps;\n
// snatch: 5 reps;\n\n\n
// Reply with your time and see if you can beat me!\n`;

// let message2 =
//   template.messageTemplate('Dean', 'Fast snatch', `wallballs: 5 reps;\n
// row: 5 reps;\n`, 'try it!!');


const sendMessage = (friendName, workoutName, workout, inputMessage, phoneNum) => {
  let formatMessage =
    template.messageTemplate(friendName, workoutName, workout, inputMessage);

  client.messages
    .create({
      body: formatMessage,
      from: '+18558158817',
      to: phoneNum
    })
    .then(message => console.log(message.sid))
    .catch(e => {
      console.error('got error:', e.code, e.message)
    })
}

// sendMessage();
module.exports.sendMessage = sendMessage;

// client.messages.each(messages => console.log(messages.sid));
// reference doc: https://www.twilio.com/docs/sms/api/message-resource?code-sample=code-read-list-all-messages&code-language=Node.js&code-sdk-version=3.x