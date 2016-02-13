var React = require('react')
var EditForm = require('./_edit_author_form.js')

var AuthorStore = require('../../stores/authorStore.js');
var AuthorActions = require('../../actions/authorActions.js');

var EditAuthorComponent = React.createClass({

  getInitialState: function(){
    return {
      authorData: {} 
    }
  },
 
  _handleSubmit: function(e){
    e.preventDefault();
    console.log(e.target)
  },

  _showLoading: function(){
      return '...loading...'
  },

  _showForm: function(){
    console.log('903090j2j0j')
    return (
      <EditForm authorData={this.props.authorData}/>
    )
  },

  _getLoadingMsgOrForm: function(){
    if (Object.keys(this.props.authorData).length){
      return this._showForm();

    } else {
      return this._showLoading();
    }

  },

  componentDidMount: function(){
    var autIdParam = this.props.params.autId
    AuthorActions.getSingleAuthor({name_id: autIdParam})
    
    AuthorStore.addChangeListener(function(){
      
      var authorRecord = AuthorStore.getAuthorsList().find(function(aut){
        return aut.name_id === autIdParam
      })

      console.log("authorRecord")
      console.log(authorRecord)

      this.setState({
        authorData: authorRecord
      })

    }.bind(this));
  },

  render: function(){

    if ( Object.keys( this.state.authorData ).length ){
      return <EditForm authorData={this.state.authorData}/>
    } else {
      return <p>...loading...</p>
    }
  }
})

module.exports = EditAuthorComponent;