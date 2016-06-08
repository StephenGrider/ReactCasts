var React = require('react');
var AppActions = require('../actions/app-actions');
var ImageStore = require('../stores/image-store');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  getTopicState: function() {
    return {
      images: ImageStore.getAll()
    }
  },

  getInitialState: function() {
    return this.getTopicState();
  },

  componentWillMount: function() {
    ImageStore.addChangeListener(this._onChange);
  },

  componentDidMount: function() {
    AppActions.getImages(this.props.params.id);
  },

  componentWillReceiveProps: function(nextProps) {
    AppActions.getImages(nextProps.params.id);
  },

  componentWillUnmount: function() {
    ImageStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="topic">
        {this.renderImages()}
      </div>
    )
  },

  renderImages: function() {
    return this.state.images.slice(0, 20).map(function(image) {
      return (
        <ImagePreview key={image.id} {...image} />
      );
    });
  },

  _onChange: function(event, images) {
    this.setState(this.getTopicState());
  }
});
