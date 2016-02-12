"use strict";
var React = require('react/addons');

var Special = module.exports = React.createClass({
  render: function() {
    var self = this;
    var elements = "special".split('').map(function(key, i) {
      return (
        <span className={key} key={key}>
          {self.props.Special[i].Value}
        </span>
      );
    })
    return (
      <div className="special">
        {elements}
      </div>
    );
  }
});
