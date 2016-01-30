var React = require('react')
var API = require('../../_API.js');
var AuthorsList = require('./_table_component.js')



var AuthorsPage = React.createClass({
  
  getInitialState: function(){
    return {
      authors: []
    }
  },

  componentDidMount: function(){
    if( this.isMounted() ){
      API.get().then(function(d){
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