var React = require('react')

var AuthorStore = require('../../stores/authorStore.js');
var AuthorActions = require('../../actions/authorActions.js');

var AuthorDisplay = require('./_single_author_display.js')

var ShowSingleAuthor = React.createClass({
  getInitialState: function(){
    console.log("SET INTIAL STATE SINGLE AUTHOR!")
    return {
      authorData: {}
    }
  },

  componentWillUnmount: function(){
    console.log('SHOW-SINGLE component unmounted!')
    console.log('xxxxxxxxxxxxx')
    AuthorStore.removeChangeListener(function(){
      console.log('single-page ++ change listener REMOVED ')
    });
  },

  componentDidMount: function(){
    console.log(':::Show SINGLE authorRECORD MOUNTED:::')
    console.log(this.props.params)
    var autIdParam = this.props.params.autId
    
    //Trigger GET_SINGLE_AUTHOR action
    AuthorActions.getSingleAuthor( {name_id: autIdParam} )
    
    //on 'GET_SINGLE_AUTHOR', retrieve the author off the _authorsList
    AuthorStore.addChangeListener(function(){
      
      var authorRecord = AuthorStore.getAuthorsList().find(function(aut){
        return aut.name_id === autIdParam
      })

      console.log(authorRecord)

      this.setState({
        authorData: authorRecord
      })
      console.log(this.state);



    }.bind(this));

    
  },

  render: function(){
    console.log('^^SHOW SINGLE RENDERING^^')
    console.log(Object.keys(this.state.authorData).length )

    if ( Object.keys(this.state.authorData).length ) {
      return <AuthorDisplay authorData={ this.state.authorData }/>
    } else {
      return <p>loading...</p>
    }
  }
})

module.exports = ShowSingleAuthor;