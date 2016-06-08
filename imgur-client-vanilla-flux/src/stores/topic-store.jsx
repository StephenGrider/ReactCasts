var Api = require('../utils/api');
var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var fetchTopics = function() {
  return Api.get('topics/defaults')
    .then(function(json) {
      this.topics = json.data;
      this.emitChange();
    }.bind(TopicStore));
}

var TopicStore = assign({}, EventEmitter.prototype, {
  topics: [],

  getAll: function() {
    return this.topics;
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
      case AppConstants.GET_TOPICS:
        return fetchTopics();
        break;
    }

    return true;
  })
});

module.exports = TopicStore;
