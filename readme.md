#Exploration into react router

##React Router Flow

####1. Create `app.js` in `./src/components`
`App` is the  view-controller that contains the HEADER component and the RouteHandler
#####Include React and Route Handler
```js
var RouteHanlder
```

#####Create Component & export
```js
var App = React.createClass({
  render: function(){
    return(
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    )
  } 
})

module.exports = App
```

####2. Create `routes.js` in `./src`
include/require 
- react
- Router (react-router)
- DefaultRoute (Router.DefaultRoute)
- Route (Router.Route)

also the components (App, Home, About)
```
var App = require('./components/app.js');
var Home = require('./components/homePage.js');
var About = require('./components/about/aboutPage');
var Authors = ....
```

#####Set up Routing
```
  var routes = (
    <Route name="app" path="/" handler='App'>
        <DefaultRoute handler={Home}/>
        <Route name="about" handler={About}/>
        <Route name="authors" handler={Authors}/>
    </Route>
  )
```

####3) Import `routes.js` in `main.js` and run Router
```
var Router = require('react-router');
var appRoutes = require('./routes.js');

Router.run(appRoutes, function(Handler){
    React.render(<Handler/>, document.querySelector('.container'))
})

```

##Using `Link` from React-Router to normalize links

##Using RouteNotFound from React-Router

##Using Redirect from React-Router