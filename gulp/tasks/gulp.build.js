var
  gulp = require('gulp'),
  runSequence = require('run-sequence')

gulp.task('build.dev',
  'Builds a static version of the site for development.',
  function (done) {
    runSequence('clean', 'bower', [ /*'images', 'fonts', */ 'styles', 'html', 'scripts'], done)
  }
)

gulp.task('build.pro',
  'TODO: Builds a static version of the site for production.',
  function (done) {
    // TODO: Run tests, add in version sha
    // runSequence('build.dev', 'fingerprint', 'html.pages', done)
    return done
  }
)
