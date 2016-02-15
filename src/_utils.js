"use strict"
var superForEach = function(nodeList, cb){

  if (!nodeList.length){
    var objLength = 0
    for (var key in this){
      if ( this.hasOwnProperty(key) ){ objLength++ }
    }
    this.length = objLength
  }

  //note: 'slice' will take an array-like object and convert it to a new array!
  var argsArray = Array.prototype.slice.call(nodeList);

  Array.prototype.forEach.call(nodeList, cb);
}

module.exports = {
  superForEach: superForEach
}