"use strict";
var React = require('react/addons');

var Quests = module.exports = React.createClass({
  questRows: function() {
    //Inventory type "44" is ammo
    return this.props.Quests.filter(function(q) {
      return q.active;
    }).map(function(quest) {
      var activeObjectives = quest.objectives.filter(function(o) { return o.enabled });
      var objectiveText = activeObjectives.map(function(o) { return o.text; }).join(' or ');
      return (
        <li key={quest.formID}>{quest.text}: {objectiveText}</li>
      )
    });
  },
  render: function() {
    return (
      <ul>
        {this.questRows()}
      </ul>
    );
  }
});

