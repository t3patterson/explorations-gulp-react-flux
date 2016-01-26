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
var concat = require('gulp-concat');
var esLint = require('gulp-eslint'); 
var browserSync = require('browser-sync').create();


//Setup Configuration Options
var config = {
  port: 3000,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
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
    livereload: true,
    fallback: 'dist/index.html' 
    // add this so that the fallback index.html is rendered
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

gulp.task('images', function(){

  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist+'/images'))
    .pipe(connect.reload())

});

gulp.task('js', function(){
  console.log('js task runnning')
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe( gulp.dest(config.paths.dist+ '/scripts' ))
    .pipe(connect.reload());
});

gulp.task('css', function(){
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + "/css"))
    .pipe(connect.reload());
})

gulp.task('lint',function(){
  return gulp.src(config.paths.js)
    .pipe(esLint({config: 'eslint.config.json'}))
    .pipe( esLint.format() )
})

gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'connect', 'images',  'css', 'watch','js','lint']) 
  // gulp will run 'html', 'open', and 'watch' at when 'gulp' is typed in command line