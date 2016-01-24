"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
            
            <a href="/" className="navbar-brand">
              <img src="images/heart.png"/>
            </a>
        </div>
        <hr/>
        <ul className="nav navbar-nav">
          <li><Link to="app">Home</Link></li>
          <li><a href="/#/about">About</a></li>
          <li><a href="/#/authors">Authors</a></li>
        </ul>
      </nav>
    )
  }
})

// NOTE: <Link to=«name»


module.exports = Header