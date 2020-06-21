const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const config = require("./config")

console.log("config: "+JSON.stringify(config))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
  console.log("ping - need to pong!")
  return res.json({data: 'pong'});
});

app.use(express.static(path.join(__dirname, '..','build')))

const server = app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
})

const io = require('socket.io')(server)
 require('./socketController')(io)
