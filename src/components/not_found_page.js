"use strict";

var React = require('react');
var Link = require('react-router').Link

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Page Not Found</h2>
        <p>Maybe go somewhere else on the site</p>
        <Link to="app" className= "btn btn-primary" > Home </Link>
      </div>
      )
  }
})

module.exports = Home