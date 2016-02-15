"use strict";

var React = require('react');

var CheckBox = React.createClass({
  getInitialState: function(){
    console.log(this.props)
    return {
      isChecked: this.props.isChecked || false
    }
  },

  _changeSelector: function(e){

    if ( !this.state.isChecked ){
      this.setState({
        isChecked: true
      })
    } else {
      this.setState({
        isChecked: false
      })
    }
    

    //if the checkbox is 
    // if( checkBox.checked ){
    //   console.log('checked === false')
    //   this.setState({
    //     isChecked: true
    //   })
    // } else {
    //   console.log('checked === false')
    //   this.setState({
    //     isChecked: false
    //   })
    // }
  },

  render: function(){
    return(
      <input type="checkbox" 
        id={this.props.fieldName} 
        checked={this.state.isChecked} 
        data-field={this.props.fieldName} 
        className="form-control" 
        onChange={this._changeSelector} />
    )
  }
})

// NOTE: <Link> component
// (1) <Link to= « name » >
// (2) `name` was declared in <Route>


module.exports = CheckBox