var Dispatcher = require('../dispatcher/appDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var ActionTypes = require('../constants/actionTypes.js');

var API = require('../_API.js');

//----------------------------------------------------------
// THE COLLECTION -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var _authorsList = []


//----------------------------------------------------------
// THE STORE -- Dispatcher Updates and Store Returns to Component
//----------------------------------------------------------
var AuthorStore = _.assign({},EventEmitter.prototype, {
  //note, the methods below have here will have EventEmitter's `.emit` ,` .on`,`.removeChangeListener`,  methods
    
    addChangeListener: function(cb){
      this.on('storeChange', cb );
    },

    removeTheChangeLister: function(cb){
      this.removeChangeListener('storeChange', cb);
    },

    emitChange: function(){
      this.emit('storeChange');
    },

    getAllAuthors: function(){
      return _authorsList
    }

});

//every store that registered w/ the dispatcher is notified of every single action
Dispatcher.register( function(action) {

  switch(action.actionType) {
    case ActionTypes.GET_ALL_AUTHORS:
      _authorsList = action.authorsList;      
      AuthorStore.emitChange();
      break;
    
    default:
      //no operation

  }
})

module.exports = AuthorStore;
