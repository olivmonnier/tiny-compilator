/**
* @class Compilator
* @param {Object} options
* @return {Object}
*
* @example:
* var compile = new Compilator({
*   helpers: 'helpers/',
*   layouts: 'layouts/',
*   partials: 'partials/'
* });
* compile.render('pages/test.hbs', {
*   title: 'Hello Evryone'
* }); => return html elements
*/
function Compilator (options) {
  this.Handlebars = require('handlebars');
  this.layouts = [];
  this.options = options;

  this.loadHelpers();
  this.loadLayouts();
  this.loadPartials();
}

Compilator.prototype.loadHelpers = require('./lib/loadHelpers');
Compilator.prototype.loadLayouts = require('./lib/loadLayouts');
Compilator.prototype.loadPartials = require('./lib/loadPartials');
Compilator.prototype.render = require('./lib/render');

module.exports = Compilator;
