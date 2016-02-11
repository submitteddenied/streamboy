"use strict";
var React = require('react/addons');

var Ammo = module.exports = React.createClass({
  ammoRows: function() {
    //Inventory type "44" is ammo
    return this.props.Inventory['44'].reverse().map(function(ammoType) {
      //ignore fusion cores
      if(ammoType.text == "Fusion Core") {
        return;
      } else {
        return (
          <li key={ammoType.formID}>{ammoType.text}: {ammoType.count}</li>
        );
      }
    });
  },
  render: function() {
    return (
      <ul>
        {this.ammoRows()}
      </ul>
    );
  }
});

