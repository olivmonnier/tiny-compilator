var Handlebars = require('handlebars');
var loadContents = require('./lib/loadContents');

module.exports = function (options) {
  var layouts = loadContents(options.layouts);
  var helpers = loadContents(options.helpers);
  var pages = loadContents(options.pages);
  var partials = loadContents(options.partials);
}
