var React = require('react');
var NewAuthorForm = require('./_form_new_authors.js');
var API = require('../../_API.js');

var NewAuthorPage = React.createClass({

  _onSave: function(e){
    e.preventDefault();

    var form = e.target
    
    var inputData = {
      firstName : form.firstName.value,
      lastName  : form.lastName.value,
      name_id   : form.firstName.value.toLowerCase() + "-" + form.lastName.value.toLowerCase()
    }

    API.post(inputData).then(function(d){
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