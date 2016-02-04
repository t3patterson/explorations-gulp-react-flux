var Dispatcher = require('../dispatcher/appDispatcher.js');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = require('../constants/actionTypes.js');

var API = require('../_API.js');

//----------------------------------------------------------
// THE COLLECTION -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var _authorsList = []
var author = ""

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
      console.log("Action PAYLOAD")
      AuthorStore.emitChange();
      break;
    default:
      //no operation

  }
})

module.exports = AuthorStore;
