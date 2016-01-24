"use strict"
var React = require('react');
//React-Router
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

//Components
var App = require('./components/app.js')
var HomeView = require('./components/home_page.js');
var AboutView = require('./components/about/about_page.js');
var AuthorsView = require('./components/authors/authors_page.js');



var routes = (
  <Route name="app" path="/" handler={App} >
    <DefaultRoute handler={HomeView}/>
    <Route name="about" handler={AboutView}/>
    <Route name="authors" handler={AuthorsView}/>
  </Route>
);

module.exports = routes;