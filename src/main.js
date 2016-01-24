// put jQuery in global namespace
$ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');

var appRoutes = require('./routes.js');

Router.run(appRoutes, function(Handler){
  React.render(<Handler/>, document.querySelector('.container'));
})