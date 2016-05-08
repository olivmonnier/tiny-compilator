module.exports = function (options) {
  this.datas = options.datas || {};
  this.Handlebars = require('handlebars');
  this.loadHelpers = require('./lib/loadHelpers')();
  this.loadLayouts = require('./lib/loadLayouts')();
  this.loadPartials = require('./lib/loadPartials')();
  this.options = options;

  return require('./lib/render');
}
