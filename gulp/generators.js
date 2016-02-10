//
// Generator tasks
//


var config = require('./build-config'),
    readline = require('readline'),
    gulp = require('gulp'),
    glob = require('glob'),
    string = require('string'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    print = require('gulp-print')


var moduleName = string(config.projectName).camelize

// Where the frontend files are kept
var appPath = config.clientFolder + '/'

function dirsInsideAppPath() {
  //console.log('dirs:', glob.sync(appPath+'**'))
  return glob.sync(appPath+'**/').map(function (f) { return f.replace(appPath, '') })
}


function readlinePrompt(completer) {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer
  })
}

function promptForName(thing, done) {
  var rl = readlinePrompt()

  rl.question(thing + ' name? ', function(answer) {
    if (!answer) {
      console.error('Ѱζ༼ᴼل͜ᴼ༽ᶘѰ TOO BLANK'.red)
      process.exit(1);
    }

    rl.close()
    done(answer)
  })
}

function promptForAppPath(done) {
  var files = dirsInsideAppPath()
  var rl = readlinePrompt(function completer(line) {
    //console.log(line, files)
    var hits = files.filter(function(f) { return f.indexOf(line) === 0 })
    return [hits.length ? hits : files, line]
  })

  rl.question('What subdirectory of "' + appPath + '" should it go in? ', function(answer) {
    rl.close()
    done(answer)
  });
}

function copyDirectiveFiles(name, path) {
  var props = {}
  props.dashedName = string(name).dasherize()
  props.camelName = string(name).camelize()
  props.destPath = './' + appPath + path + '/' +  props.dashedName
  props.moduleName = moduleName

  gulp.src(__dirname + '/templates/directive/*')
    .pipe(template(props))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('NAME', props.dashedName)
    }))
    .pipe(print())
    .pipe(gulp.dest(props.destPath))

  // gulp.src(__dirname + '/templates/directive.js')
  //   .pipe(template(props))
  //   .pipe(rename(props.dashedName + '-directive'))
  //   .pipe(gulp.dest(props.destPath))
  //   .on('end', done);
}

function copyPageFiles(name, path) {
  var props = {}
  props.dashedName = string(name).dasherize()
  props.camelName = string(name).camelize()
  props.destPath = './' + appPath + path + '/' + props.dashedName
  props.moduleName = moduleName

  gulp.src(__dirname + '/templates/page/*')
    .pipe(template(props))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('NAME', props.dashedName)
    }))
    .pipe(print())
    .pipe(gulp.dest(props.destPath))

}

function copyServiceFiles(name, path) {
  var props = {}
  props.dashedName = string(name).dasherize()
  props.camelName = string(name).camelize().capitalize()
  props.destPath = './' + appPath + path
  props.moduleName = moduleName

  console.log(props.dashedName,props.camelName,props.destPath)

  gulp.src(__dirname + '/templates/services/*')
    .pipe(template(props))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('NAME', props.dashedName)
    }))
    .pipe(print())
    .pipe(gulp.dest(props.destPath))
}

gulp.task('new.directive', 'Creates new directive from template', function(done) {
  //console.log(yargs.argv)

  promptForName('directive', function (name) {
    promptForAppPath(function(path) {
      console.log('path', path)
      copyDirectiveFiles(name, path, done)
    })
  })
})

gulp.task('new.page', 'Creates new page from template', function(done) {
  promptForName('page', function (name) {
    promptForAppPath(function(path) {
      console.log('path ', path);
      copyPageFiles(name, path, done)
    })
  })
})

gulp.task('new.service', 'Creates new service from template', function(done) {
  promptForName('service', function (name) {
      var path = 'resources/services'
      copyServiceFiles(name, path, done)
  })
})
