var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div>
      I am a comment box.
      {this.props.comments}
    </div>
  }
});
