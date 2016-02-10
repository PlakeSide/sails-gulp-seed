var gulp = require('gulp'),
    config = require('../build-config'),
    gutil = require('gulp-util'),
    sources = require('../sources'),
    debug = require('gulp-debug'),
    helpers = require('../gulp-helpers')


gulp.task('test.config',
  'Prints current config',
  function(){
    console.log('*********************************************************************')
    console.log(config)
    console.log('*********************************************************************')
  }
)

// RUN "> gulp test.glob -[templates|scripts|styles|...ect]"
gulp.task('test.glob',
  'Used to check the globbing pattern of files',
  function() {
    if( process.argv.length !== 4 ){
      return gutil.log( 'Argument Not Found','Try: ">gulp test.glob -[templates|scripts|styles|...ect]" ' )
    }
    var files = process.argv.slice(-1)[0].split('-')[1];
    gulp.src(sources(files))
      .pipe(debug())
  },
  {
    options: {
      'pages': 'return html files',
      'scripts': 'return javascript files',
      'templates': 'returns templates',
      'styles': 'returns all css / sass files'
    }
  }
);

gulp.task('test.error',
  'Tests notifyError',
  function(){
    helpers.notifyError('There is an error')
  }
)
