var gulp = require('gulp'),
    _ = require('lodash'),
    config = require('../build-config'),
    sources = require('../sources'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    jadeLint = require('gulp-jade-lint'),
    helpers = require('../gulp-helpers'),
    flatten = require('gulp-flatten')

// Compile jade to html.
gulp.task('html', ['html.pages', 'html.templates'])

gulp.task('html.pages', 'Compiles Jade pages drops them into build root', function () {

  var locals = {
    pageData: _.pick(config, ['projectName','apiBaseUrl'])
  }

  return gulp.src(sources('pages'))
    .pipe(jade({ pretty: true, locals: locals }))
    .on('error', helpers.swallowError)
    .pipe(gulp.dest(config.buildRoot))

})

gulp.task('html.templates', 'Compiles Jade templates and puts them into assets / templates', function () {

  return gulp
    .src(sources('templates'))
    .pipe(jadeLint())
      .on('error', helpers.swallowError)
    .pipe(jade())
      .on('error', helpers.swallowError)
    // .pipe(angularTemplatecache({
    //   standalone: true,
    //   module: 'templates',
    //   base: function(file) {
    //     return file.path.match(/.*[\/\\](.+\.(html|svg))/)[1]
    //   }
    // }))
    .pipe(flatten())
    .pipe(gulp.dest(config.buildAssets + '/templates/'))
      .on('error', gutil.log)
})
