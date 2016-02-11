"use strict";
var React = require('react');

var GameUI = module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.data.PlayerInfo.PlayerName}</h1>
      </div>
    );
  }
});

