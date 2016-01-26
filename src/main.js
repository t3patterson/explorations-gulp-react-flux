/*eslint-disable strict*/

// put jQuery in global namespace
$ = jQuery = require('jquery');

var React = require('react');
var Router = require('react-router');

var appRoutes = require('./routes.js');

Parse.initialize("gGt3i515AVidNfMcYL3PfQOInNcYZ5tDdAKJrYWF", "6kxwYiFzzXFzipipuxLNsb5qCLTLCIhV7A46J5Od");

Router.run(appRoutes, Router.HistoryLocation, function(Handler){
  React.render(<Handler/>, document.querySelector('.container'));
})