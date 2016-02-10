var gulp = require('gulp'),
    sources = require('../sources'),
    config = require('../build-config'),
    path = require('path'),
    watch = require('gulp-watch')

gulp.task('watch', function () {


  // Note that watch() doesn't seem to be following symlinks in vendor when
  // using a generic glob like `vendor/**/*.js`.
  gulp.watch( ['bower.json'].concat(sources('bower')), ['bower'] )
  gulp.watch( sources('pages'), ['html.pages'])
  gulp.watch( sources('templates'), ['html.templates'])
  gulp.watch( sources('scripts'),['scripts'])
  gulp.watch( sources('styles'), ['styles'])
  // gulp.watch( sources('images'), ['images'])
  // gulp.watch( sources('gitHooks'), ['copy-git-hooks'])

  watch(
    [ config.buildRoot + '**/*', '!' + config.buildRoot + '/**/*.css', '!'+ config.buildRoot +'/**/*.map'],
    function(file) {
      console.log('reloading', path.relative(__dirname, file.path))
      // browserSync.reload(path.relative(__dirname, file.path))
      }
   )


})
