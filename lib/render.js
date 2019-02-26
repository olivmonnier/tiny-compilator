var fm = require('front-matter');
var fs = require('fs');

module.exports = function (file, datas) {
  if (!file) return;

  file = fs.readFileSync(file, 'utf8');

  var page = fm(file);
  var options = page.attributes;
  var layoutPage = options.layout || 'default';
  var layoutTemplate = this.layouts[layoutPage];
  var pageTemplate = this.Handlebars.compile(page.body + '\n');

  this.Handlebars.registerPartial('body', pageTemplate);
  return layoutTemplate(Object.assign({}, datas, { options }));
}
