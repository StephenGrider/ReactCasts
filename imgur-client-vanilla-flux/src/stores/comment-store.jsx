var Api = require('../utils/api');
var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var fetchImage = function(id) {
  return Api.get('gallery/' + id + '/comments')
    .then(function(json) {
      this.comments = json.data;
      this.emitChange();
    }.bind(CommentStore));
};

var CommentStore = assign({}, EventEmitter.prototype, {
  comments: [],

  getAll: function() {
    return this.comments;
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
      case AppConstants.GET_IMAGE:
        return fetchImage(action.id);
        break;
    }

    return true;
  })
});

module.exports = CommentStore;
