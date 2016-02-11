"use strict";
var React = require('react/addons');

var Ammo = require('./ammo');
var Quests = require('./quests');
var MiniMap = require('./mini-map');

var GameUI = module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>{this.props.data.PlayerInfo.PlayerName}</h1>
        <Ammo Inventory={this.props.data.Inventory} />
        <Quests Quests={this.props.data.Quests} />
        <MiniMap Map={this.props.data.Map} />
      </div>
    );
    //return (
      //<div>
        //<h1>{this.props.data.PlayerInfo.PlayerName}</h1>
        //<p>X: {this.props.data.Map.World.Player.X}</p>
        //<p>Y: {this.props.data.Map.World.Player.Y}</p>
        //<Ammo Inventory={this.props.data.Inventory} />
      //</div>
    //);
  }
});

