"use strict"
var React = require('react');
//React-Router
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//Components
var App = require('./components/app.js')
var Home = require('./components/homePage.js');
var About = require('./components/about/aboutPage.js');

var routes = (
  <Route name="app" path="/" handler={App} >
    <DefaultRoute handler={Home}/>
    <Route name="about" handler={About}/>
  </Route>
);

module.exports = routes;