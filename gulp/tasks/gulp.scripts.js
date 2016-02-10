var gulp = require('gulp'),
    config = require('../build-config'),
    sources = require('../sources'),
    helpers = require('../gulp-helpers'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    cached = require('gulp-cached'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    remember = require('gulp-remember'),
    concat = require('gulp-concat')



gulp.task( 'scripts', function () {
  return gulp.src(sources('scripts'))
    .pipe(sourcemaps.init())
    .pipe(cached('scripts'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(babel({ presets: [ 'es2015' ]}))
      .on('error', helpers.swallowError)
    .pipe(ngAnnotate())
    .pipe(remember('scripts'))
    .pipe(concat( config.projectName + '.js' ))
    // .pipe(helpers.ifProd(uglify({ mangle: true })))
    .pipe(sourcemaps.write( '.' ))
    .pipe(gulp.dest( config.buildAssets ))
} )
