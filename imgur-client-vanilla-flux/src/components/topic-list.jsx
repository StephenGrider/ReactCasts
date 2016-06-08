var React = require('react');
var TopicStore = require('../stores/topic-store');
var AppActions = require('../actions/app-actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getTopicsState: function() {
    return {
      topics: TopicStore.getAll()
    }
  },

  getInitialState: function() {
    return this.getTopicsState();
  },

  componentWillMount: function() {
    TopicStore.addChangeListener(this._onChange);
  },

  componentDidMount: function() {
    AppActions.getTopics();
  },

  componentWillUnmount: function() {
    TopicStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="list-group">
        {this.renderTopics()}
      </div>
    );
  },

  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return (
        <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      );
    });
  },

  _onChange: function(event, topics) {
    this.setState(this.getTopicsState());
  }
});
