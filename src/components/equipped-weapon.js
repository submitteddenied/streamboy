"use strict";
var React = require('react/addons');

var EquippedWeapon = module.exports = React.createClass({
  currentWeapon: function() {
    //Inventory type "43" is weapons
    return this.props.Inventory['43'].find(function(weapon) {
      return weapon.equipState == 4;
    })
  },
  render: function() {
    var weapon = this.currentWeapon();
    var ammoInfo = weapon.itemCardInfoList[0];
    var damage = weapon.itemCardInfoList.reduce(function(memo, card) {
      if(card.text == "$dmg") {
        return memo + card.Value;
      } else {
        return memo;
      }
    }, 0);
    return (
      <div className="equipped-weapon">
        <h1>{weapon.text}</h1>
        <p className="ammo">
          {ammoInfo.text}: {ammoInfo.Value}
        </p>
        <p className="total-damage">{damage}</p>
      </div>
    );
  }
});
