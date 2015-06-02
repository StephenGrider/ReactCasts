var React = require('react');

var App = React.createClass({
  render: function() {
    return <h1>
      Hello, React!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
