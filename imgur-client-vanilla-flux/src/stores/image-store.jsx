var Api = require('../utils/api');
var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var fetchImages = function(topicId) {
  return Api.get('topics/' + topicId)
    .then(function(json) {
      this.images = _.reject(json.data, function(image) {
        return image.is_album
      });

      this.emitChange();
    }.bind(ImageStore));
};

var fetchImage = function(id) {
  return Api.get('gallery/image/' + id)
    .then(function(json) {
      if (this.images) {
        this.images.push(json.data);
      } else {
        this.images = [json.data];
      }

      this.emitChange();
    }.bind(ImageStore));
};

var ImageStore = assign({}, EventEmitter.prototype, {
  images: [],

  getAll: function() {
    return this.images;
  },

  getById: function(id) {
    var image = _.findWhere(this.images, { id: id });

    if (image) {
      return image;
    } else {
      fetchImage(id);
      return null;
    }
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
      case AppConstants.GET_IMAGES:
        return fetchImages(action.topicId);
        break;
      case AppConstants.GET_IMAGE:
        return fetchImage(action.id);
        break;
    }

    return true;
  })
});

module.exports = ImageStore;
