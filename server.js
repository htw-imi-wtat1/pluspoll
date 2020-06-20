const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
  console.log("ping - need to pong!")
  return res.json({data: 'pong'});
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 3001
console.log("listening on port "+port)
app.listen(port);
