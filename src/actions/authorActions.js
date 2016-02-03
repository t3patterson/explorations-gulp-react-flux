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
    API.get().then(function(authorsData){
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_ALL_AUTHORS,
        authorsList: authorsData.results 
      })
    })
  }


}

module.exports = AuthorActions;