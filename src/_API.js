"use strict"

function APIConstructor(){
  var apiParams = {
    url: 'https://api.parse.com/1/classes/authors',
    headers: {
      'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
      'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
    }
  }

  function requestType(reqType){

    var apiReqSettings = function(dataObject){

      switch (reqType) {
        case ('getAll'):
          apiParams.type = 'get'
          apiParams.data = ''
          break;

        case ('getSingle'):
          apiParams.type = 'get'
          apiParams.data = 'where='+JSON.stringify(dataObject)
          break;

        case ('post'):
          apiParams.type = 'post';
          apiParams.contentType = 'application/json';
          apiParams.data = JSON.stringify(dataObject);
          break;

        case ('update'):
          console.log(dataObject)
          apiParams.type = 'put'
          apiParams.url += '/'+dataObject.objectId
          apiParams.contentType = 'application/json';
          delete dataObject.objectId;
          delete dataObject.updatedAt;
          delete dataObject.createdAt;

          apiParams.data = JSON.stringify(dataObject);
          console.log(apiParams)
      }

      return $.ajax(apiParams)
    }

    return apiReqSettings
  }

  return {
    getAll: requestType('getAll'), //returns a FUNCTION that, when executed, will ajax-request+return a promise
    getSingle: requestType('getSingle'),
    post: requestType('post'),
    update: requestType('update')
  }
}

var API = new APIConstructor();


module.exports =  API