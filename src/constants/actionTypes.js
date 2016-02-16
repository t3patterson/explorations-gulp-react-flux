var keyMirror = require('react/lib/keyMirror');

var ActionTypes = keyMirror({
  CREATE_AUTHOR: null,
  
  GET_SINGLE_AUTHOR: null,
  GET_ALL_AUTHORS: null,
  
  UPDATE_AUTHOR: null,
  SET_EDIT_FORM_UI_STATE: null,
  RESET_EDIT_FORM_STATE: null,

  DELETE_AUTHOR: null
})

module.exports = ActionTypes