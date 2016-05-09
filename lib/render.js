var fm = require('front-matter');
var fs = require('fs');

module.exports = function (file) {
  if (!file) return;
  
  file = fs.readFileSync(file, 'utf8');

  var page = fm(file);
  var layoutPage = page.attributes.layout || 'default';
  var layoutTemplate = this.layouts[layoutPage];
  var pageTemplate = this.Handlebars.compile(page.body + '\n');

  this.Handlebars.registerPartial('body', pageTemplate);
  return layoutTemplate(this.datas);
}
