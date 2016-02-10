var gulp = require('gulp'),
    config = require('../build-config'),
    sources = require('../sources'),
    // filter = require('gulp-filter'),
    concat = require('gulp-concat'),
    helpers = require('../gulp-helpers'),
    sass = require('gulp-sass'),
    // browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('styles',
  'Contacts all CSS in project folder',
  function(){

  // var cssFilter = filter('**/*.css', {restore: true})
  var outputStyle = config.isDev ? 'compact' : 'compressed'

  var stream = gulp.src(sources('styles'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourcemap: true,
      outputStyle: outputStyle,
      includePaths: sources('sassIncludePaths'),
    }))
    .on('error', helpers.swallowError)
    .pipe(autoprefixer({ browsers: [ 'last 2 versions' ] }))
    .pipe(concat( config.projectName + '.css' ))
    .pipe(sourcemaps.write( '.' ))
    .pipe(gulp.dest( config.buildAssets ))

  // if(config.isDev) {
  //   stream = stream
  //     .pipe(cssFilter)
  //     .pipe(browserSync.reload({ stream: true }))
  //     .pipe(cssFilter.restore)
  // }

  return stream
})
