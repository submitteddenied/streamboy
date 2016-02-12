"use strict";
var React = require('react/addons');

var r = function round(number) {
  var places = 1;
  var factor = Math.pow(10, places);
  return Math.ceil(number * factor) / (factor);
}
var PlayerInfo = module.exports = React.createClass({
  render: function() {
    return (
      <div className="player-info">
        <h1 className="name">{this.props.PlayerInfo.PlayerName}</h1>
        <p className="level">{this.props.PlayerInfo.XPLevel}</p>
        <p className="caps">{this.props.PlayerInfo.Caps}</p>
        <p className="hp">{r(this.props.PlayerInfo.CurrHP)}/{r(this.props.PlayerInfo.MaxHP)}</p>
        <p className="weight">{r(this.props.PlayerInfo.CurrWeight)}/{r(this.props.PlayerInfo.MaxWeight)}</p>
      </div>
    );
  }
});
