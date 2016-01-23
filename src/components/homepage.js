"use strict";

var React = require('react');

var HomePage = React.createClass({
  render: function(){
    return(
      <div>
        <h1>React Mania</h1>
        <p>Lives here, bits.</p>
      </div>
      )
  }
})

React.render(<HomePage/>  , document.querySelector('.container') )