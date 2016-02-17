var Dispatcher = require('../dispatcher/appDispatcher.js');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = require('../constants/actionTypes.js');

var API = require('../_API.js');

//----------------------------------------------------------
// State Variables -- Dispatcher Updates and Component Can Access Through AuthorStore
//----------------------------------------------------------
var _authorsList = [];
var _recordHasBeenUpdated = false

//author getting edited
var _authorEditFormState = {

}

//----------------------------------------------------------
// THE STORE -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------

var changeListenerCB = null

var AuthorStore = _.assign({},EventEmitter.prototype, {
  //note, the methods below have here will have EventEmitter's `.emit` ,` .on`,`.removeChangeListener`,  methods
    
    storeChange_fn: null,

    addChangeListener: function(cb){
      var p = $.Deferred()
      this.storeChange_fn = cb
      p.resolve( this.on('store-change', this.storeChange_fn ) );
      return p
    },

    removeChangeListener: function(){
      console.log(this)
      this.removeListener('store-change', this.storeChange_fn )

    },

    emitChange: function(moreInfo){
      this.emit('store-change');
    },
   // -----------

    getAuthorsList: function(){
      return _authorsList;
    },

    getEditFormUIState: function(){
      return _authorEditFormState
    },

    recordWasUpdated: function(){
      return _recordHasBeenUpdated;
    },

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
      // console.log(actionBlock.authorData)
      _authorsList = []
      _authorsList.push(actionBlock.authorData)
      _authorEditFormState = actionBlock.authorData
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      _recordHasBeenUpdated = true;
      AuthorStore.emitChange();
      break;
    
    case ActionTypes.EDIT_FORM_UPDATE_UI:
      // console.log('ui state per store')
      // console.log(actionBlock.authorData)
      if ( JSON.stringify(_authorEditFormState) !== JSON.stringify(actionBlock.authorData) ){
        _authorEditFormState = actionBlock.authorData;
        AuthorStore.emitChange();
      }
      break;

    case ActionTypes.RESET_EDIT_FORM_STATE:
      _recordHasBeenUpdated = false;
      _authorEditFormState = {}
      break;
    

    case ActionTypes.DELETE_AUTHOR: 
      // console.log('author was deleted, mayne!!!');
      _recordHasBeenUpdated = true
      AuthorStore.emitChange();
    
    default:
      //no operation

  }
})

module.exports = AuthorStore;
