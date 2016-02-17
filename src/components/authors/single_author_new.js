var React = require('react');
var Router = require('react-router');

var _ = require('lodash');

var superForEach = require('../../_utils.js').superForEach

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
      },

      formComplete: false

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

    if ( isNaN(userInput.age) || userInput.age.length < 1){
      
      formIsValid = false
      console.log("Please endter a number..")
      errorProps.age = "Please enter in a number"
    } else if (parseInt(userInput.age) < 10){
      
      errorProps.age = "Sorry, too young"
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
    console.log(this.form.active)
    var userInputData = {
      firstName : form.firstName.value,
      lastName  : form.lastName.value,
      name_id   : form.firstName.value.toLowerCase() + "-" + form.lastName.value.toLowerCase(),
      age       : form.age.value,
      active    : form.active.checked
    }

    if ( this._isFormValid(userInputData) ){
      
      var sanitizedInput = _.clone(userInputData)

      sanitizedInput.age = parseInt(sanitizedInput.age,0)
      
      console.log(sanitizedInput)

      console.log('form 2 db!')
      console.log(sanitizedInput)
      
      AuthorActions.postNewAuthorToDB(sanitizedInput);

      this.setState({
        errorsMessages: {
          firstName: null,
          lastName: null,
          age: null
        },

        formComplete: true
      
      });

    } 
  },

  componentDidMount: function(){
    AuthorStore.addChangeListener(function(){
      // console.log('new authore data:.....')
      if (this.state.formComplete){
        this.form.firstName.value = '';
        this.form.lastName.value = '';
        this.form.lastName.age = '';
        this.form.lastName.active = false;
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