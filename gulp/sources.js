var config = require('./build-config')
var root = config.projectRoot
var src = config.projectRoot + '/' + config.clientFolder + '/'
var mainBowerFiles = require('main-bower-files')

var sources = {

	'scripts' : [
		src + 'init.js', // Load Main First
	  src + 'angular-main.js', // Load Main First
		src + '**/!(*-test).js' // load all other js but test files
	],

	'tests': src + '**/*-test.js',

	'styles': [
		src + 'styles/main.scss', // Load Main first

		src + '**/*.scss'
	],

	'sassIncludePaths': [
		src + 'styles'
	],


	// Modification here wil require mod of 'templates'
	'pages': src + 'index/index.jade',


	'templates': [
			'!' + src + 'index/*.jade', // do not include index directory
			src + '**/*.jade'
		],


	// 'images': assets + 'images/**/*.*', // separate meta images

	'indexImages' : src + 'meta-images/**.*',


	'fonts' : src + 'fonts/**/*.*',

	'todos' : [ // Places where ToDo's can be found
			root + '*.{js,jade,scss}',
			root + 'config/**/*.{js,jade,scss}',
			root + 'scripts/**/*.{js,jade,scss}',
			root + 'fs/**/*.{js,jade,scss}',
			src + '**/*.{js,jade,scss}'
		],

	'gitHooks' : root + 'dev/git-hooks/*',

	'bower' : mainBowerFiles('**/*.*', function () { return [] })

}

// Looks for a source in `sources`.  Throws if key is not found to prevent silent typos.
module.exports = function (name) {
  if(!sources[name]) {
    throw new Error('No source named "'+name+'" in sources.\nAvailable: '+Object.keys(sources).join(', '))
  }
  return sources[name]
}
