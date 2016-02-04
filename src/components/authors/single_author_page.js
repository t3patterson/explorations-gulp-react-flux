var React = require('react');
var Router = require('react-router')

var API = require('../../_API.js');

var AuthorActions = require('../../actions/authorActions.js')
var AuthorStore = require('../../stores/authorStore.js')

var SingleAuthorPage = React.createClass({

  getInitialState: function(){
    return {
      author: {}
    }
  },

  componentDidMount: function(){
    var autIdParam = this.props.params.autId
    AuthorActions.getSingleAuthor( {name_id: autIdParam} )
    AuthorStore.addChangeListener(function(){
      console.log(AuthorStore.getAuthorsList())
      var authorRecord = AuthorStore.getAuthorsList().find(function(aut){
        return aut.name_id === autIdParam
      })

      console.log('Author Record--Returned-after-flux')
      console.log(authorRecord)
      this.setState({
        authorData: authorRecord
      })

    }.bind(this));
  },

  render: function(){
    console.log('single author render/????')
    return (
      <div>
        <h2>Single Author</h2>
        <pre>
          {JSON.stringify(this.state.authorData)}
        </pre>
      </div>
    )
  }
})

module.exports = SingleAuthorPage;