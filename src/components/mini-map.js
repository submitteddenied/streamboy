"use strict";
var React = require('react/addons');

var MiniMap = module.exports = React.createClass({
  getXPercent: function() {
    var extents = this.props.Map.World.Extents;
    var range = extents.NEX - extents.NWX;
    var offset = Math.abs(Math.min(extents.NEX, extents.NWX));
    return (this.props.Map.World.Player.X + offset) / range * 100;
  },
  getYPercent: function() {
    var extents = this.props.Map.World.Extents;
    var range = extents.NWY - extents.SWY;
    var offset = Math.abs(Math.min(extents.NWY, extents.SWY));
    return (1 - ((this.props.Map.World.Player.Y + offset) / range)) * 100;
  },
  markerStyle: function() {
    return {
      left: this.getXPercent() + '%',
      top: this.getYPercent() + '%'
    };
  },
  render: function() {
    var foo = 12;
    return (
      <div className="mapContainer">
        <div className="mapMarker" style={this.markerStyle()}></div>
      </div>
    );
  }
});

