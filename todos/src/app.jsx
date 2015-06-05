var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var List = require('./list');
var rootUrl = 'https://blistering-torch-4253.firebaseio.com/';

var App = React.createClass({
  mixins: [ ReactFire ],
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(fb, 'items');
    fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
        </div>
      </div>
    </div>
  },
  handleDataLoaded: function(){
    this.setState({loaded: true});
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
