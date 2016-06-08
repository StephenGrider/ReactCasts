var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatcher/app-dispatcher');

var AppActions = {
  getTopics: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_TOPICS
    })
  },
  getImages: function(topicId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_IMAGES,
      topicId: topicId
    })
  },
  getImage: function(id) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.GET_IMAGE,
      id: id
    })
  }
}

module.exports = AppActions;
