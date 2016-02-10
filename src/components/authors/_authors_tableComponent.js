var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthorsList = React.createClass({
  
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  _createAuthorRows: function(auth,i){
    return (
      <tr key={i}>
        <td>
          {i+1}
        </td>
        
        <td>
          <Link to="show-single-author" params={{autId: auth.name_id}}> {auth.name_id} </Link>
        </td>

        <td>
          {auth.firstName + " " + auth.lastName}
        </td>
      </tr>
    );
  },

  render: function(){
    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {this.props.authorsData.map(this._createAuthorRows)}
        </tbody>
      </table>
    )
  }
})

module.exports = AuthorsList;
