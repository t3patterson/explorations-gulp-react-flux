var React = require('react');
var Router = require('react-router')

var NewAuthorForm = require('./_new_author_form.js');
var API = require('../../_API.js');

var AuthorActions = require('../../actions/authorActions.js')
var AuthorStore = require('../../stores/authorStore.js')

var NewAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function(){
    return {
      errorMessages: {
        firstName: null,
        lastName: null
      }
    }
  },


  _isFormValid: function(userInput){
    var formIsValid = true
    var errorProps = JSON.parse(JSON.stringify(this.state.errorMessages));

    if ( userInput.firstName.length < 3){
      formIsValid = false;
      errorProps.firstName = 'First name must be longer than 3 characters';
    } else {
      errorProps.firstName = null
    }

    if ( userInput.lastName.length < 3){
      formIsValid = false;
      errorProps.lastName = 'Last name must be longer than 3 characters'
    } else {
      errorProps.lastName = null;
    }

    this.setState({
      errorMessages: errorProps
    });

    // console.log('IS FORM VALID?? ', formIsValid )
    return formIsValid
  },

  _onSave: function(e){
    e.preventDefault();
    var form = this.form = e.target
    var userInputData = {
      firstName : form.firstName.value,
      lastName  : form.lastName.value,
      name_id   : form.firstName.value.toLowerCase() + "-" + form.lastName.value.toLowerCase()
    }

    if ( this._isFormValid(userInputData) ){
      
      this.setState({
        errors: {
          firstName: null,
          lastName: null
        }
      });

      AuthorActions.postNewAuthorToDB(userInputData);
    } 
  },

  componentDidMount: function(){
    AuthorStore.addChangeListener(function(){
      // console.log('new authore data:.....')
      if (this.form){
        this.form.firstName.value = '';
        this.form.lastName.value = '';
        this.transitionTo('authors');
      }
    }.bind(this));
  },

  componentWillUnmount: function(){
    // console.log('NewAuthor component unmounting...')
    AuthorStore.removeChangeListener()
  },

  render: function(){
    return (
      <div>
        <h2>Add Author Info</h2>
        <NewAuthorForm onSave={this._onSave} errors={this.state.errorMessages}/>
      </div>
    )
  }
})

module.exports = NewAuthorPage;