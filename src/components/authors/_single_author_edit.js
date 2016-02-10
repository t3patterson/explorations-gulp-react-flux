var React = require('react')

var EditAuthor = React.createClass({

  _showLoading: function(){
      return '...loading...'
  },

  _showTable: function(){
    return (
      <table className="table">
       <tr>
         <th className="active">First Name</th>
         <td><input defaultValue={this.props.authorData.firstName}  className="form-control" /></td>
       </tr>
       <tr>
         <th className="active">Last Name</th>
         <td><input defaultValue={this.props.authorData.lastName} className="form-control" /></td>
       </tr>
       <tr>
         <th className="active">New User Name</th>
         <td><em>{this.props.authorData.name_id}</em></td>
       </tr>
       <tr>
         <th className="active">Age</th>
         <td><input defaultValue={this.props.authorData.age} className="form-control" /></td>
       </tr>
       <tr>
         <th className="active">Status</th>
         <td><input defaultValue={this.props.authorData.active} className="form-control" /></td>
       </tr>
      </table>
    )
  },

  _getLoadingOrForm: function(){
    if (Object.keys(this.props.authorData).length){
      return this._showTable();

    } else {
      return this._showLoading();
    }

  },

  render: function(){
    console.log('props on EditAuthor')
    console.log(this.props.authorData.firstName)
    
    return (
      <form>
        { this._getLoadingOrForm() }
      </form>
    )
  }
})

module.exports = EditAuthor;