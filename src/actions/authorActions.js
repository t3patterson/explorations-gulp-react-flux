"user strict"

var Dispatcher = require('../dispatcher/appDispatcher.js');
var API = require('../_API.js');

var ActionTypes = require('../constants/actionTypes.js');


var AuthorActions = {

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