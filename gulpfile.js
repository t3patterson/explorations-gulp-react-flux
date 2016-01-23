"use strict";

// INSTALLATION NOTE: Make sure that gulp program can be accessed
//
// ## install set prefix
// $ npm config set prefix /usr/local
// 
// ## install globally
// $ npm install gulp -g
//

//Import Modules
var gulp = require('gulp');
var connect = require('gulp-connect'); // runs a local dev server
var open = require('gulp-open'); // Open a url in the web browser
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');


//Setup Configuration Options
var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
    mainJs: './src/main.js'
  }
}

//Setup Tasks
// - connect
// - open
// - html
// - watch

// THEN
// -js (w/ )

//Start a local dev server
gulp.task('connect', function(){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

//'open' task will run after the 'connect' task
gulp.task('open', ['connect'], function(){
  console.log( config.devBaseUrl + ":" + config.port + "/" )
  gulp.src('dist/index.html') // open the file at this location in the fs
    .pipe(open(
      '',
      { url: config.devBaseUrl + ":" + config.port + "/"}
    ) 
  ); //opens http://localhost:3000
});

gulp.task('html', function(){
  gulp.src( config.paths.html ) //get html files
    .pipe( gulp.dest(config.paths.dist) ) // pipe them thru to the dist folder
    .pipe( connect.reload() ) // reload the page
});

gulp.task('js', function(){
  console.log('js task runnning')
  console.log(browserify)
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe( gulp.dest(config.paths.dist+ '/scripts' ))
    .pipe(connect.reload());
});


gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'open', 'watch','js']) 
  // gulp will run 'html', 'open', and 'watch' at when 'gulp' is typed in command line