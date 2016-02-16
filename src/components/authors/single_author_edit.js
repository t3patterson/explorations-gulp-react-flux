var React = require('react');
var Router = require('react-router')
var EditForm = require('./_edit_author_form.js')

var AuthorStore = require('../../stores/authorStore.js');
var AuthorActions = require('../../actions/authorActions.js');

var superForEach = require('../../_utils.js').superForEach

var EditAuthorComponent = React.createClass({

  mixins: [
    Router.Navigation
  ],

  getInitialState: function(){
    return {
      authorData: {}
    }
  },

  _handleSubmit: function(e){
    e.preventDefault();

    // console.log('submishion');
    var form = React.findDOMNode(e.target)
    

    var inputEls = form.querySelectorAll('input')

    var userObj = {}
    
    superForEach(inputEls,function(el){
      if (el.id.length){
        
        switch(el.type){
          case ('checkbox'):
            userObj[el.id] = el.checked
            break;
          default:
            userObj[el.id] =  isNaN(el.value) ? el.value : parseInt(el.value,10);
        }
      }
    })
    
    // console.log('Author data is....')
    // console.log(this.state.authorData)
    
    var updatedUser = _.extend(this.state.authorData, userObj);
    
    // console.log('...Updated User is this...')
    // console.log(updatedUser);
    AuthorActions.updateSingleAuthor(updatedUser)
  },

  _handleDelete: function(e){
    e.preventDefault();
    console.log('AuthorActions.DeleteUser')
    console.log( this.state.authorData )
    console.log(e.target)
    AuthorActions.deleteSingleAuthor(this.state.authorData)
  },



  componentDidMount: function(){
    var autIdParam = this.props.params.autId
    AuthorActions.resetEditFormState()

    AuthorActions.getSingleAuthor({
      name_id: autIdParam
    })

    this._onStoreChange(autIdParam);
  },

  _onStoreChange: function(nameId){
    var authorNameId = nameId
    var self = this
    AuthorStore.addChangeListener(function(){
      console.log('change herrrrd -- single author edit')
      console.log('record updated???')
      //if record was updated, transition to another page
      if( AuthorStore.recordWasUpdated() ){
        
        console.log('Record WAS UPDATED!')
        console.log('Transitioning---->>')

        this.transitionTo('authors')

      } else {
        //Test for changes to form-state

        var authorRecord = AuthorStore.getAuthorsList().find(function(aut){
          return aut.name_id === authorNameId
        })

        console.log('Record Fresh-->') 
        console.log(authorRecord)


        //get the editform UI State
        if (authorRecord){

          var authorRecord = AuthorStore.getEditFormUIState()
          
          console.log('setting state, k...')
          console.log(self.state)
          this.setState({
            authorData: authorRecord
          })
        }
      }

    }.bind(this))
  },

  componentWillUnmount: function(){
    console.log('EDIT page unmounting')
    console.log('xxxxxxxxxxxxxxx')

    AuthorStore.removeChangeListener(function(){
      console.log('single-page-edit ++ change listener REMOVED ')
    })
  },

  render: function(){
    console.log(this.state.authorData )
    if ( Object.keys( this.state.authorData ).length ){
      return <EditForm 
                authorData={this.state.authorData} 
                handleSubmit={this._handleSubmit} 
                handleDelete={this._handleDelete} />
    } else {
      return <p>...loading...</p>
    }
  }
})

module.exports = EditAuthorComponent;