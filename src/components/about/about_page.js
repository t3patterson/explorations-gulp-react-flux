"use strict";
var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h1>About</h1>
        <p>This app has the following tech</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Node</li>
        </ul>
      </div>
      )
  }
});;

module.exports = About;