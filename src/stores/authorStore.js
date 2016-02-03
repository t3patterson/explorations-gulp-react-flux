var Dispatcher = require('../dispatcher/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var ActionTypes = require('../constants/actionTypes.js');

var API = require('../_API.js');

//----------------------------------------------------------
// THE COLLECTION -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var _authorsList = []
var newAuthor = ""

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

    getNewAuthorData: function(){
      return newAuthor;
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
    default:
      //no operation

  }
})

module.exports = AuthorStore;
