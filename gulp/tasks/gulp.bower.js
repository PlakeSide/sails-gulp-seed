var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    gutil = require('gulp-util'),
    config = require('../build-config'),
    sources = require('../sources'),
    filter = require('gulp-filter'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    helpers = require('../gulp-helpers'),
    uglify = require('gulp-uglify')

gulp.task('bower', 'Downloads bower files and then runs bower.styles and bower.scripts', function( done ){

  runSequence('bower.download', ['bower.styles','bower.scripts'], done)

})

gulp.task('bower.download', function( done ) {
  bower.commands.install([], { save: true }, {})
    .on('end', function( installed ){
      gutil.log( 'Installed with bower:', Object.keys(installed).join(', ') || 'nothing.' )
      done()
    })
})

gulp.task('bower.styles', function( done ) {
  return gulp.src( sources('bower') )
    .pipe(filter( '**.css' ))
    .pipe(concat( 'dependencies.css' ))
    .pipe(gulp.dest( config.buildAssets ))
    return done()
})

gulp.task('bower.scripts', function( done ) {
  return gulp.src( sources('bower') )
    .pipe(filter( '**.js' ))
    .pipe(concat( 'dependencies.js' ))
    .pipe(helpers.ifProd(uglify({ mangle: false })))
    .pipe(gulp.dest( config.buildAssets ))
    return done()
})
