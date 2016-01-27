"use strict"

function APIConstructor(){

  function requestType(httpType){
    var httpType  = httpType,
        apiParams = {
          url: 'https://api.parse.com/1/classes/authors',
          headers: {
            'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
            'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
          }
        }
    
    var apiRequestFn = function(dataObject){
      
      var settings = apiParams;

      switch (httpType) {
        case ('get'):
          settings.type = 'get'
          break;
        case ('post'):
          settings.type = 'post';
          settings.contentType = 'application/json';
          settings.data = JSON.stringify(dataObject);
          break;
      }

      return $.ajax(settings)
    }
    
    return apiRequestFn
  }

  return {
    get: requestType('get'),
    post: requestType('post')
  }
}

var API = new APIConstructor();

API.get().then(function(data){
  console.log('FROM API MODULE')
  console.log(data)
  console.log('-------------')
})

module.exports =  API