"user strict"

var Dispatcher = require('../dispatcher/appDispatcher.js');
var API = require('../_API.js');
var ActionTypes = require('../constants/actionTypes.js');

var authorsListCache = []

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
      authorsListCache = authorsData.results

      Dispatcher.dispatch({
        actionType: ActionTypes.GET_ALL_AUTHORS,
        authorsList: authorsData.results 
      })
    })
  },

  getSingleAuthor: function(dataObj){

    var authorCached = authorsListCache.find(function(author){
      return author.name_id
    })
    
    if(authorCached){

      Dispatcher.dispatch({
        actionType: ActionTypes.GET_SINGLE_AUTHOR,
        authorsList: authorCached 
      })
    } else {
      console.log('API FECTCHING:---');
      console.log(dataObj)

      API.getSingle(dataObj).then(function(data){
        console.log('Returned from SINGLE AUTHOR query');
        console.log(data.results);
        authorsListCache.push(data.results[0]);
        
      })
    }
  },



}

module.exports = AuthorActions;