var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {
    return <div
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : null }
      {this.state.hovering ? this.inset() : null}
    </div>
  },
  inset: function() {
    return <div className="inset">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>
  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';

    return <img src={link} />
  },
  video: function() {
    return <div>
      <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.props.mp4} type='video/mp4'></source>
      </video>
    </div>
  },
  icon: function() {
    return <span className="glyphicon glyphicon-play"></span>
  },
  handleMouseEnter: function() {
    this.setState({hovering: true});
  },
  handleMouseLeave: function() {
    this.setState({hovering: false});
  }
});
