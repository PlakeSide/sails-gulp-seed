var
  gulp = require('gulp-help')(require('gulp')),
  config = require('./gulp/build-config'),
  del = require('del'),
  runSequence = require('run-sequence')

// var isDev = config.isDev;

// Our template generation tasks
require('./gulp/generators')

// Test and help config tasks
require('./gulp/tasks/gulp.test')

// Build Dev and Production Tasks
require('./gulp/tasks/gulp.build')

// Build HTML / JADE  Tasks
require('./gulp/tasks/gulp.html')

// Build /src Styles
require('./gulp/tasks/gulp.styles')

// Build /src Styles
require('./gulp/tasks/gulp.scripts')

// Build bower libraries
require('./gulp/tasks/gulp.bower')

// Build watch files
require('./gulp/tasks/gulp.watch')

// Create Server
require('./gulp/tasks/gulp.server')

// Remove files from the build directory.
gulp.task('clean',
  'Wipes build directory',
  function (done) {
    del(config.buildRoot)
    done()
  }
)

gulp.task(
  'default',
  'The default task, run via just "gulp."',
  ['XXXXXXX']
)

gulp.task('devServer',
  'Build files for development and start up test server and a watcher.',
  function (done) {

    runSequence(
      'build.dev',
      ['server'],
      ['watch'],
      // 'test.watch',
      done
    )
})
