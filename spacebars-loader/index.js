var loaderUtils = require('loader-utils');
var scanner = require('./lib/html_scanner.js');
var doHTMLScanning = require('./lib/compile-templates.js');

module.exports = function(source) {
	if (this.cacheable) this.cacheable();

	var options = loaderUtils.parseQuery(this.query);
	return doHTMLScanning.call(this, source, scanner, options);
};
