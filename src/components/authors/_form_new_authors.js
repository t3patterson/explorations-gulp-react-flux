var React = require('react')

var NewAuthorsForm = React.createClass({
    render: function(){
    return (
      <form>
        
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

      </form>
    )
  }
})

module.exports = NewAuthorsForm;