"use strict";
var React = require('react/addons');

var PlayerInfo = require('./player-info');
var Ammo = require('./ammo');
var Quests = require('./quests');
var MiniMap = require('./mini-map');
var EquippedWeapon = require('./equipped-weapon');
var Consumables = require('./consumables');
var SPECIAL = require('./special');

var GameUI = module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <p>Updated: {this.props.data.updatedAt}</p>
        <PlayerInfo PlayerInfo={this.props.data.PlayerInfo} />
        <EquippedWeapon Inventory={this.props.data.Inventory} />
        <Consumables Inventory={this.props.data.Inventory} />
        <Quests Quests={this.props.data.Quests} />
        <MiniMap Map={this.props.data.Map} />
        <SPECIAL Special={this.props.data.Special} />
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
