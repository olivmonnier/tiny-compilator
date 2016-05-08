var Handlebars = require('handlebars');
var loadHelpers = require('loadHelpers');
var loadLayouts = require('loadLayouts');
var loadPartials = require('loadPartials');

module.exports = function (options) {
  this.Handlebars = Handlebars;
  this.loadHelpers = loadHelpers;
  this.loadLayouts = loadLayouts;
  this.loadPartials = loadPartials;
  this.options = options;
}
