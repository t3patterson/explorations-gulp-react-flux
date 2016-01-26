var React = require('react');
var NewAuthorForm = require('./_form_new_authors.js');

var NewAuthorPage = React.createClass({

  _onSave: function(e){
    e.preventDefault();

    var form = e.target
    
    $.ajax({

        url: 'https://api.parse.com/1/classes/authors',
        type: 'post',
        headers: { 
          'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
          'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
        },
        contentType : "application/json", 
        data: JSON.stringify({
          "firstName": form.firstName.value,
          "lastName": form.lastName.value,
          "name_id": form.firstName.value.toLowerCase() + "-" + form.lastName.value.toLowerCase()
        })

      }).then(function(d){
        form.firstName.value = '';
        form.lastName.value = '';
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