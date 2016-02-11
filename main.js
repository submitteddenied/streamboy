var pblib = require('./lib/pipboy_connection');
var express = require('express');
var _ = require('underscore');

var database = {status: 'no connection'};
var guard = false;
pblib.register('Inventory', function(data) {
  database.Inventory = data;
  database.status = 'connected';
});

pblib.register('PlayerInfo', function(data) {
  database.PlayerInfo = data;
  database.status = 'connected';
});

pblib.register('Quests', function(data) {
  database.Quests = data;
  database.status = 'connected';
});

pblib.register('Map', _.throttle(function(data) {
  database.Map = data;
  database.status = 'connected';
}, 500));


var app = express();

app.get('/data.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(database));
});

app.use(express.static('dist'));

app.listen(3000, function() {
  console.log('Server listening on port 3000');
})
