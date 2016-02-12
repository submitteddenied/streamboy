var React = require('react');
var Loading = require('./components/loading');
var GameUI = require('./components/game-ui');
// window.dummyData = require('../db.json');
// window.topLeft = require('../top-left.json');
// window.bridge = require('../on-bridge.json');

window.onload = function() {
  React.render(
    <Loading />,
    document.getElementById('content')
  );

  window.refreshInterval = window.setInterval(function() {
    $.ajax({
      url: 'data.json',
      success: updateFrame
    });
  }, 1000);
}

window.updateFrame = function updateFrame(data) {
  if(data.status == 'connected') {
    React.render(
      <GameUI data={data} />,
      document.getElementById('content')
    );
  } else {
    React.render(
      <Loading />,
      document.getElementById('content')
    );
  }
}
