var React = require('react');
var Router = require('react-router')

var API = require('../../_API.js');

var AuthorActions = require('../../actions/authorActions.js')
var AuthorStore = require('../../stores/authorStore.js')

var SingleAuthorPage = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  componentDidMount: function(){
    var authorId = this.props.params.autId
    AuthorActions.getSingleAuthor({name_id: authorId})
  },

  render: function(){
    console.log('single author render/????')
    return (
      <div>
        <h2>Single Author</h2>
        <pre>
        </pre>
      </div>
    )
  }
})

module.exports = SingleAuthorPage;