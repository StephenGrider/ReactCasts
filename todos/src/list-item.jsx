var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text
    }
  },
  render: function() {
    return <div className="input-group">
      <span className="input-group-addon">
        <input type="checkbox" />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        />
      <span className="input-group-btn">
        <button className="btn btn-default">
          Delete
        </button>
      </span>
    </div>
  }
});
