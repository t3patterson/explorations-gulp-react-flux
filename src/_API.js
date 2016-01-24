"use strict"

var data = [
  {
    name: "Travis Hubbard",
    id: "travis-hubbard",
    active: true
  },
  {
    name: "Justin Richards",
    id: "justin-richards",
    active: true
  },
  {
    name: "Susan Wingfield",
    id: "susan-wingfield",
    active: false
  },
  {
    name: "Tommy Crimey",
    id: "tommy-crimey",
    active: true
  }
];

function APIConstructor(d){
  this.authorsList = d
}

APIConstructor.prototype.getActiveAuthors = function(){
  return this.authorsList.filter(function(aut){
    return aut.active 
  })
}

var API = new APIConstructor(data);

module.exports =  API