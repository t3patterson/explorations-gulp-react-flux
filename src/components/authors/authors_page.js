var React = require('react')

var AuthorActions = require('../../actions/authorActions.js');
var AuthorStore = require('../../stores/authorStore.js');

var AuthorsList = require('./_authors_tableComponent.js');


var AuthorsPage = React.createClass({
  
  getInitialState: function(){
    return {
      authorsList: []
    }
  },

  //(1)
  componentDidMount: function(){
      console.log('authors_page.js mounted, bits');
      this._onChange();
      AuthorActions.fetchAuthorsFromDB();
  },

  componentWillUnmount: function(){
    console.log('component unmounted')
    AuthorStore.removeChangeListener();
  },

  _onChange: function(){
    var self = this
    AuthorStore.addChangeListener(function(){
        console.log('changeListenerRuns')
        console.log(AuthorStore.getAuthorsList())
        self.setState({ authorsList: AuthorStore.getAuthorsList() });
      }
    )
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