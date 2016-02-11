#!/usr/bin/env node
'use strict';

var _pipboylib = require('pipboylib');
var clone = require('clone');
var _ = require('underscore');

var _rx = require('rx');

var listeners = {};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var discover = _pipboylib.connection.discover;
var createSocket = _pipboylib.connection.createSocket;
var sendPeriodicHeartbeat = _pipboylib.connection.sendPeriodicHeartbeat;
var createConnectionSubject = _pipboylib.connection.createConnectionSubject;
var parseBinaryMap = _pipboylib.decoding.parseBinaryMap;
var parseBinaryDatabase = _pipboylib.decoding.parseBinaryDatabase;
var aggregateBundles = _pipboylib.decoding.aggregateBundles;
var generateTreeFromDatabase = _pipboylib.decoding.generateTreeFromDatabase;
var connected = _pipboylib.status.connected;
var channels = _pipboylib.constants.channels;

var launchCli = function launchCli(subject) {
  var database = subject.filter(function (x) {
    return x.type === channels.DatabaseUpdate;
  }).map(function (x) {
    return parseBinaryDatabase(x.payload);
  }).scan(aggregateBundles, {}).map(function (x) {
    return generateTreeFromDatabase(x);
  });

  var throttledDb = database.throttle(500);
  _.map(['Inventory', 'PlayerInfo', 'Quests', 'Map'], function(prop) {
    throttledDb.map(function(x) {
      return x[prop];
    }).distinctUntilChanged().subscribe(function(data) {
      _.each(listeners[prop], function(listener) {
        listener(clone(data));
      });
    });
  });
};

discover().then(function (server) {
  return createSocket(server.info.address);
}).then(function (socket) {
  sendPeriodicHeartbeat(socket);
  return createConnectionSubject(socket);
}).then(function (subject) {
  connected(subject).then(function (handshake) {
    return launchCli(subject);
  }).catch(function (err) {
    console.error('Couldn\'t establish connection!', err);
    console.error(err.stack);
    throw err;
  });
}).catch(function (err) {
  throw err;
});

module.exports = {
  register: function(property, cb) {
    if(!listeners[property]) {
      listeners[property] = [];
    }
    listeners[property].push(cb);
  }
}
