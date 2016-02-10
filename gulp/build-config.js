var _ = require('lodash')

var projectRoot = require('path').join(__dirname,'/../'),
		buildRoot = '.tmp/public'
// Define default seetings and then overrides in the dev || production environment.

var config = {

	default : {
		projectName : require('../package.json').name,
    isDev : false,
		projectRoot :projectRoot,
		buildRoot : projectRoot + buildRoot,
		buildAssets : projectRoot + buildRoot + '/assets/',
		clientFolder : 'client',
		env : process.env.NODE_ENV || 'development'
	},

	development : {
	// These will override default when in development
		isDev : true
	},

	production : {
	// These will override default when in production

	}
}

module.exports = _.merge({}, config.default, config[process.env.NODE_ENV] || config.development);
