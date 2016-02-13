var React = require('react');
var _ = require('lodash')

var AuthorActions = require('../../actions/authorActions.js');


var EditAuthorForm = React.createClass({

  _modify_name_id: function(e){
    var inputEl = React.findDOMNode(e.target)
    var authrData =  _.clone(this.state).authorData

    var propName = React.findDOMNode(e.target).dataset.field

    console.log(propName)
    authrData[propName] = inputEl.value
    authrData.name_id = authrData.firstName.toLowerCase()+'-'+authrData.lastName.toLowerCase();

    AuthorActions.setEditFormState(authrData);

  },

  componentDidMount: function(){
    AuthorActions.setEditFormState(this.state.authorData);
  },

  render: function(){
    console.log('form  renderrrd')
    return (
      <form>
        <table className="table">
         <tr>
           <th className="active">First Name</th>
           <td>
              <input 
                defaultValue={this.props.authorData.firstName}  
                className="form-control" 
                data-field={"firstName"}
                onChange={this._modify_name_id} />
          </td>
         </tr>
         <tr>
           <th className="active">Last Name</th>
           <td>
            <input 
              defaultValue={this.props.authorData.lastName} 
              className="form-control" 
              data-field={"lastName"} 
              onChange={this._modify_name_id} />
            </td>
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
        <input type="submit" className="btn btn-info"/>
      </form>
    )
  }
})

module.exports = EditAuthorForm;