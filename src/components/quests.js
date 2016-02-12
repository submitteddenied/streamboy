"use strict";
var React = require('react/addons');

var Quests = module.exports = React.createClass({
  questRows: function() {
    return this.props.Quests.filter(function(q) {
      return q.active;
    }).map(function(quest) {
      var activeObjectives = quest.objectives.filter(function(o) { return o.enabled });
      var objectiveText = activeObjectives.map(function(o) { return o.text; }).join(' or ');
      return (
        <div className="quest" key={quest.formID}>
          <h1>{quest.text}</h1>
          <p>{objectiveText}</p>
        </div>
      );
    });
  },
  render: function() {
    return (
      <div className="quests">
        {this.questRows()}
      </div>
    );
  }
});
