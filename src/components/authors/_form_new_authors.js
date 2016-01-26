var React = require('react')

var NewAuthorsForm = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.props.onSave}>
        
        <label htmlFor="firstName">Name Name</label>
        <input type= "text"
          name= "firstName"
          className= "form-control"
          placeholder= "First Name"
          ref="firstName"
          defaultValue= ""
        />
        <br/>
        
        <label htmlFor="lastName">Last Name</label>
        <input type= "text"
          name= "lastName"
          className= "form-control"
          placeholder= "Last Name"
          ref="lastName"
          defaultValue= ""
        />
        <br/>

        <input type="submit"
          className="btn btn-default"
          value="Submit"/>

      </form>
    )
  }
})

module.exports = NewAuthorsForm;