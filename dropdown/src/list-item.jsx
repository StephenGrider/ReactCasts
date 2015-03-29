var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <li><a>{this.props.item}</a></li>
  }
});
