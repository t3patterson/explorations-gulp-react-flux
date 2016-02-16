var React = require('react')

var AuthorActions = require('../../actions/authorActions.js');
var AuthorStore = require('../../stores/authorStore.js');

var AuthorsList = require('./_authors_tableComponent.js');


var AuthorsPage = React.createClass({
  
  getInitialState: function(){
    this._componentUnmounting = false
    
    return {
      authorsList: [],
    }
  },

  //(1)
  componentDidMount: function(){
      console.log('authors_page.js mounted, bits');
      console.log(this)
      this._onChange();
      AuthorActions.fetchAuthorsFromDB();
  },

  componentWillUnmount: function(){
    console.log('component unmounting --- AuthorsPage')
    
    this._componentUnmounting = true

    AuthorStore.removeChangeListener(function(){
      console.log('authors-page ++ change listener REMOVED ')
    });
  },

  _onChange: function(){
    var self = this
    console.log('!!! Adding CHANGE LISTENER !!!')
    AuthorStore.addChangeListener(function(){
      console.log('component unmounting?? - ', this._componentUnmounting)
      if(!this._componentUnmounting){
        console.log('authors-page-changeListenerRuns')
        this.setState({ authorsList: AuthorStore.getAuthorsList() });
      }
    }.bind(this))
  },

  render: function(){
    return (
      <div>
        <h1>Authors</h1>
        <AuthorsList authorsList={this.state.authorsList || []} />
      </div>
    );
  }
})

module.exports = AuthorsPage;
