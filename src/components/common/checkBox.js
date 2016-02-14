"use strict";

var React = require('react');

var CheckBox = React.createClass({
  getInitialState: function(){
    return {
      isChecked: this.props.isChecked
    }
  },

  _changeSelector: function(e){
    var checkBox = React.findDOMNode(e.target)
    
    console.log(boxHasCheck.checked)
    console.log(this)
    if( boxHasCheck ){
      checkBox = false
      this.setState({
        isChecked: false
      })
    } else {
      checkBox = true
      this.setState({
        isChecked: true
      })
    }
  },

  render: function(){
    return(
      <input type="checkbox" checked={this.state.isChecked} data-field={this.props.fieldName} className="form-control" onChange={this._changeSelector} />
    )
  }
})

// NOTE: <Link> component
// (1) <Link to= « name » >
// (2) `name` was declared in <Route>


module.exports = CheckBox