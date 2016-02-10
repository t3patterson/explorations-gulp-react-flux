var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var API = require('../../_API.js');

var AuthorActions = require('../../actions/authorActions.js');
var AuthorStore = require('../../stores/authorStore.js');

var ShowSingleAuthor = require('./_single_author_show');
var EditSingleAuthor = require('./_single_author_edit')

var SingleAuthorPage = React.createClass({

  getInitialState: function(){
    return {
      authorData: {}
    }
  },

  componentDidMount: function(){
    var autIdParam = this.props.params.autId
    
    //Trigger GET_SINGLE_AUTHOR action
    AuthorActions.getSingleAuthor( {name_id: autIdParam} )
    
    //on 'GET_SINGLE_AUTHOR', retrieve the author off the _authorsList
    AuthorStore.addChangeListener(function(){
      
      var authorRecord = AuthorStore.getAuthorsList().find(function(aut){
        return aut.name_id === autIdParam
      })

      this.setState({
        authorData: authorRecord
      })


    }.bind(this));
  },

  _viewComponent: function(path){
    
    if (window.location.pathname.indexOf('edit') > -1 ){
      
      return <EditSingleAuthor authorData={this.state.authorData}/>
    } else {
      return <ShowSingleAuthor authorData={this.state.authorData} />
    }


  },

  render: function(){
    console.log(this.state.authorData)
    return (
      <div>
        <h2>Single Author</h2>
        {this._viewComponent()}
      </div>
    )
  }
})

module.exports = SingleAuthorPage;