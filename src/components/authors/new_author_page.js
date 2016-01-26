var React = require('react')
var NewAuthorForm = require('./_form_new_authors.js');

var NewAuthorPage = React.createClass({

  _onSave: function(e){
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.firstName.value);

    $.ajax({
        url: 'https://api.parse.com/1/classes/authors',
        type: 'post',
        headers: { 
          'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
          'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
        },
        contentType : "application/json", 
        data: JSON.stringify({
          "firstName": e.target.firstName.value,
          "lastName": e.target.lastName.value,
          "name_id": e.target.firstName.value.toLowerCase() + "-" + e.target.lastName.value.toLowerCase()
        })
      }).then(function(d){
        console.log(d)
      }.bind(this))

  },

  render: function(){
    return (
      <div>
        <h2>Add Author Info</h2>
        <NewAuthorForm onSave={this._onSave}/>
      </div>
    )
  }
})

module.exports = NewAuthorPage;