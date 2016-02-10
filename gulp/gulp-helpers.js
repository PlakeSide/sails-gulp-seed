var gulp = require('gulp'),
    config = require('./build-config'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    gIf = require('gulp-if')



var notifyError = function notifyError(title, message) {
	gulp.src('gulpfile.js').pipe(notify({
		title: 'Gulp Error: ' + title,
		message: message,
		icon: null,
	}));
}

var swallowError = function swallowError(error) {
	console.log(error)
	var errorMessage = error.toString()
	var plugin = errorMessage.split('\n')[0]

	// Try and pull out file and line info
	var m = errorMessage.match(/filename: (.*)/i)
	var file = m && m[1].split(config.projectName + '/')[1]

	m = errorMessage.match(/line.*: ?(\d+)/i)
	var line = m ? (':' + m[1]) : ''

	if(!errorMessage) {
		gutil.log(error)
	}

	gutil.log(errorMessage.red)
	notifyError(plugin, file + line)
	this.emit('end')
}

var ifDev = function ifDev(fn) {
  return gIf(config.isDev, fn)
}

var ifProd = function ifProd(fn) {
  return gIf(!config.isDev, fn)
}


module.exports = {
	notifyError : notifyError,
	swallowError : swallowError,
	ifDev : ifDev,
	ifProd : ifProd
}
