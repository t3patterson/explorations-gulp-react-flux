var React = require('react')
var NewAuthorForm = require('./_form_new_authors.js');


var NewAuthorPage = React.createClass({
  

  render: function(){
    return (
      <div>
        <h2>Add Author Info</h2>
        <div className='col-xs-8 col-xs-offset-2'>
          <NewAuthorForm/>
        </div>
      </div>
    )
  }
})

module.exports = NewAuthorPage;