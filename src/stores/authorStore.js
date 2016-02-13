var Dispatcher = require('../dispatcher/appDispatcher.js');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = require('../constants/actionTypes.js');

var API = require('../_API.js');

//----------------------------------------------------------
// THE COLLECTION -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var _authorsList = []
var _author = ""

var _authorFormState = {

}

//----------------------------------------------------------
// THE STORE -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var AuthorStore = _.assign({},EventEmitter.prototype, {
  //note, the methods below have here will have EventEmitter's `.emit` ,` .on`,`.removeChangeListener`,  methods
    
    addChangeListener: function(cb){
      this.on('storeChange', cb );
    },

    removeChangeListener: function(){
      console.log('change listener removed')
      this.removeListener('storeChange',function(){});
    },

    emitChange: function(){
      this.emit('storeChange');
    },
   // -----------

    getAuthorsList: function(){
      return _authorsList;
    },

    getEditFormUIState: function(){
      return _authorEditFormState
    }


});

//every store that is registered w/ the dispatcher 
//  is notified of every single action
Dispatcher.register( function(actionBlock) {

  switch(actionBlock.actionType) {
    case ActionTypes.GET_ALL_AUTHORS:
      _authorsList = actionBlock.authorsList;      
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      newAuthor = actionBlock.authorData;
      AuthorStore.emitChange();
      break;
    case ActionTypes.GET_SINGLE_AUTHOR:
      console.log("GET SINGLE Action PAYLOAD");
      console.log(actionBlock.authorData)
      _authorsList = []
      _authorsList.push(actionBlock.authorData)
      AuthorStore.emitChange();
      break;

    case ActionTypes.EDIT_FORM_UPDATE_UI:
      _authorEditFormState = actionBlock.authorData
    default:
      //no operation

  }
})

module.exports = AuthorStore;
