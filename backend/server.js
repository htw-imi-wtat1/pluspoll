const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
  console.log("ping - need to pong!")
  return res.json({data: 'pong'});
});

app.use(express.static(path.join(__dirname, '..','build')))

const port = process.env.PORT || 3001

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const io = require('socket.io')(server)
 require('./socketController')(io)
