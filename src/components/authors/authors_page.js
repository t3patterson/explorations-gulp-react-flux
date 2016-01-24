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
      var activeAuthors = AuthorAPI.getActiveAuthors();

      this.setState({
        authors: activeAuthors
      });
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