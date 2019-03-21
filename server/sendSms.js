// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const dotenv = require('dotenv');
const result = dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// create a helper function to send sms messages
// variables: phone number, message (workout + custom messages)

let message = 'wallballs: 5 reps;/n row: 5 reps;/n snatch: 5 reps;/n/n/n see if you can beat me!'


client.messages
  .create({
    body: message,
    from: '+18558158817',
    to: '+16509961385'
  })
  .then(message => console.log(message.sid))
  .catch(e => {
    console.error('got error:', e.code, e.message)
  })

client.messages.each(messages => console.log(messages.sid));
// reference doc: https://www.twilio.com/docs/sms/api/message-resource?code-sample=code-read-list-all-messages&code-language=Node.js&code-sdk-version=3.x