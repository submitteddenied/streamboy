"use strict";
var React = require('react/addons');

var interestingConsumables = {
  '48': ["Stimpak", "RadAway"],
  '35': ["Bobby Pin"]
}

var Consumables = module.exports = React.createClass({
  itemRows: function() {
    var self = this;
    return Object.keys(interestingConsumables).map(function(category) {
      return interestingConsumables[category].map(function(itemName) {
        var item = self.props.Inventory[category].find(function(item) { return item.text == itemName; });
        return (
          <li key={item.formID}>{item.text}: {item.count}</li>
        );
      })
    })
  },
  render: function() {
    return (
      <div className="consumables">
        <ul>
          {this.itemRows()}
        </ul>
      </div>
    );
  }
});
