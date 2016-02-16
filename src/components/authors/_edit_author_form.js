var React = require('react');
var _ = require('lodash')

var AuthorActions = require('../../actions/authorActions.js');

var CheckBoxComponent = require('../common/checkBox.js')

var EditAuthorForm = React.createClass({
  
  _modify_name_id: function(e){
    var inputEl = React.findDOMNode(e.target)
    var authrData =  _.clone(this.props.authorData)

    var propName = React.findDOMNode(e.target).dataset.field

    authrData[propName] = inputEl.value
    authrData.name_id = authrData.firstName.toLowerCase()+'-'+authrData.lastName.toLowerCase();

    // console.log(authrData)
    AuthorActions.setEditFormState(authrData);

  },

 
  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <table className="table">
         <tr>
           <th className="active">First Name</th>
           <td>
              <input 
                id={'firstName'}
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
              id={'lastName'}
              defaultValue={this.props.authorData.lastName} 
              className="form-control" 
              data-field={"lastName"} 
              onChange={this._modify_name_id} />
            </td>
         </tr>
         <tr>
            <th className="active">New User Name</th>
            <td>
              <em><input id={'name_id'} 
                value={this.props.authorData.name_id} 
                className="form-control"/></em>
            </td>
         </tr>
         <tr>
           <th className="active">Age</th>
           <td><input 
                id={'age'} 
                defaultValue={this.props.authorData.age} className="form-control" /></td>
         </tr>
         <tr>
           <th className="active">Status</th>
           <td><CheckBoxComponent
                  fieldName={'active'}
                  isChecked={this.props.authorData.active}/> </td>
         </tr>
        </table>
        <input type="submit" value="Edit Author Info" className="btn btn-info"/>
        <button onClick={this.props.handleDelete} className="btn btn-danger">Delete Author</button>
      </form>
    )
  }
})

module.exports = EditAuthorForm;