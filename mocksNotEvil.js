const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

const hello = (req, res) => res.send('Hello World!');
{
  const expected = 'Hello World!';
  const msg = `should call .send() with ${expected}`;
  const res = {
    send: (actual) => {
      if (actual !== expected) {
        throw new Error(`NOT OK ${msg}`);
      }
      console.log(`OK: ${msg}`);
    },
  };
  hello({}, res);
}
