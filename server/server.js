const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const querystring = require('querystring');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => res.send('test server'));

app.post('/workout', (req, res) => {
  // console.log('message I got>>>>>', req.body);
  const message = req.body;
  console.log('message I got>>>>>', message);
  res.send('ok');
});


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');
  console.log('message I got>>>>>', req.body);
  res.writeHead(200, {
    'Content-Type': 'text/xml'
  });
  res.end(twiml.toString());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))