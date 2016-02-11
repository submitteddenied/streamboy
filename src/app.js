var React = require('react');
var Loading = require('./components/loading');
var GameUI = require('./components/game-ui');

// Your code here
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

function updateFrame(data) {
  React.render(
    <GameUI data={data} />,
    document.getElementById('content')
  );
}
