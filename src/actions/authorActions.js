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
      // console.log('--- from database in ACTION---')
      // console.log(authorsData.results)
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_ALL_AUTHORS,
        authorsList: authorsData.results 
      })
    })
  },

  getSingleAuthor: function(dataObj){
    API.getSingle(dataObj).then(function(data){
      console.log(data.results[0])
      Dispatcher.dispatch({
        actionType: ActionTypes.GET_SINGLE_AUTHOR,
        authorData: data.results[0] 
      })
    });
  },

  updateSingleAuthor: function(dataObj){
    console.log(dataObj)
    API.update(dataObj).then(function(d){
      console.log('Action saved to db successfully!')
      console.log(d)
      Dispatcher.dispatch({
        actionType: ActionTypes.UPDATE_AUTHOR,
        authorData: d
      })
    })

  },

  setEditFormState: function(dataObj){
    console.log('setting edit form state..')
    Dispatcher.dispatch({
      actionType: ActionTypes.EDIT_FORM_UPDATE_UI, 
      authorData: dataObj
    })
  },

  resetEditFormState: function(){
    Dispatcher.dispatch({
      actionType: ActionTypes.RESET_EDIT_FORM_STATE
    })
  }


}

module.exports = AuthorActions;