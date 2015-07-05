var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {
    return <h1>I'm child1</h1>
  }
});

var Child2 = React.createClass({
  render: function() {
    return <h1>I'm the other child, Child2.</h1>
  }
})

var routes = (
  <Router history={new HashHistory}>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1} />
      <Route path="2" component={Child2} />
    </Route>
  </Router>
)

// var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
