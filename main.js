var pblib = require('./lib/pipboy_connection');
var express = require('express');

// var dummyData = require('./db.json');

var database = {status: 'no connection'};
pblib.register(function(data) {
  database = data;
  database.status = 'connected';
  database.updatedAt = new Date();
});

var app = express();

app.get('/data.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(database));
});

app.use(express.static('dist'));

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
