var React = require('react')
var AuthorAPI = require('../../_API.js');
var AuthorsList = require('./_table_component.js')




var AuthorsPage = React.createClass({
  
  getInitialState: function(){
    return {
      authors: []
    }
  },

  componentDidMount: function(){
    if( this.isMounted() ){
      $.ajax(
        'https://api.parse.com/1/classes/authors',
        {
          headers: { 
            'X-Parse-Application-Id': 'gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF',
            'X-Parse-REST-API-Key': 'VtD6G0eBUNKcaMh6SxmcPwuvGMCZBzxFuKlyEeoI'
          },
        }
      ).then(function(d){
        this.setState({authors: d.results});
      }.bind(this))
    }
  },

  render: function(){
    return (
      <div>
        <h1>Authors</h1>
        <AuthorsList authors={this.state.authors} />
      </div>
    );
  }
})

module.exports = AuthorsPage;