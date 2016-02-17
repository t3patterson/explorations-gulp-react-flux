"use strict"

var apiURL = 'https://api.parse.com/1/classes/authors';


function APIConstructor(){
  var apiParams = {
    headers: {
      'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
      'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
    }
  }

  function requestType(reqType){

    var apiReqSettings = function(dataObject){

      switch (reqType) {
        case ('getAll'):
          apiParams.url = apiURL;
          apiParams.type = 'get';
          apiParams.data = '';
          break;

        case ('getSingle'):
          apiParams.url = apiURL;
          apiParams.type = 'get';
          apiParams.data = 'where='+JSON.stringify(dataObject);
          break;

        case ('post'):
          apiParams.type = 'post';
          apiParams.contentType = 'application/json';
          apiParams.data = JSON.stringify(dataObject);
          break;

        case ('update'):
          apiParams.type = 'put';
          apiParams.url = apiURL + '/' + dataObject.objectId;
          apiParams.contentType = 'application/json';
          delete dataObject.objectId;
          delete dataObject.updatedAt;
          delete dataObject.createdAt;

          apiParams.data = JSON.stringify(dataObject);
          break;
        
        case ('delete'):
          apiParams.url = apiURL + '/' + dataObject.objectId;
          apiParams.type = 'delete';
      }

      // console.log(dataObject)
      // console.log(apiParams);
      return $.ajax(apiParams);
    }

    return apiReqSettings
  }

  return {
    getAll: requestType('getAll'), //returns a FUNCTION that, when executed, will ajax-request+return a promise
    getSingle: requestType('getSingle'),
    post: requestType('post'),
    update: requestType('update'),
    destroy: requestType('delete')
  }
}

var API = new APIConstructor();


module.exports =  API