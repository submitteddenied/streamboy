"use strict";
var React = require('react/addons');

var MiniMap = module.exports = React.createClass({
  getXPercent: function() {
    var GLOBAL_X_OFFSET = -32819;
    var extents = this.props.Map.World.Extents;
    var range = extents.NEX - extents.NWX;
    var offset = Math.abs(Math.min(extents.NEX, extents.NWX));
    return (this.props.Map.World.Player.X + offset + GLOBAL_X_OFFSET) / range * 100;
  },
  getYPercent: function() {
    var GLOBAL_Y_OFFSET = 4650;
    var extents = this.props.Map.World.Extents;
    var range = extents.NWY - extents.SWY;
    var offset = Math.abs(Math.min(extents.NWY, extents.SWY));
    return (1 - ((this.props.Map.World.Player.Y + offset + GLOBAL_Y_OFFSET) / range)) * 100;
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
      <div className="mapWrapper">
        <div className="mapContainer">
          <div className="mapMarker" style={this.markerStyle()}></div>
        </div>
      </div>
    );
  }
});
