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
          <li><Link to="about">About Us</Link></li>
          <li><Link to="authors">Authors List</Link></li>
          <li><Link to="authors-new">Add New Author</Link></li>
        </ul>
      </nav>
    )
  }
})

// NOTE: <Link> component
// (1) <Link to= « name » >
// (2) `name` was declared in <Route>


module.exports = Header