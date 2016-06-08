var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AppActions = require('../actions/app-actions');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },

  componentWillMount: function() {
    TopicStore.addChangeListener(this.onChange);
  },

  componentDidMount: function() {
    AppActions.getTopics();
  },

  render: function() {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Imgur Browser
          </Link>
          <ul className="nav navbar-nav navbar-right">
            {this.renderTopics()}
          </ul>
        </div>
      </nav>
    );
  },

  renderTopics: function() {
    return this.state.topics.slice(0, 4).map(function(topic) {
      return (
        <li key={topic.id}>
          <Link activeClassName="active" to={"topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
      );
    });
  },

  onChange: function(event) {
    this.setState({
      topics: TopicStore.getAll()
    });
  }
});
