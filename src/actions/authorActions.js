"user strict"

var Dispatcher = require('../dispatcher/appDispatcher.js');
var API = require('../_API.js');
var ActionTypes = require('../constants/actionTypes.js');

var AuthorActions = {
  postNewAuthorToDB: function(data){
    API.post(data).then(function(savedRecord){
      Dispatcher.dispatch({
        actionType: ActionTypes.CREATE_AUTHOR,
        authorData: savedRecord
      })
    })  
  },

  fetchAuthorsFromDB: function(){
    API.getAll().then(function(authorsData){
      console.log('--- from database in ACTION---')
      console.log(authorsData.results)
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_ALL_AUTHORS,
        authorsList: authorsData.results 
      })
    })
  },

  getSingleAuthor: function(dataObj){
    API.getSingle(dataObj).then(function(data){
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_SINGLE_AUTHOR,
        authorData: data.results[0] 
      })
    });
  },



}

module.exports = AuthorActions;