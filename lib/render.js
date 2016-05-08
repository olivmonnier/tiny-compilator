var fm = require('front-matter');

module.exports = function (file) {
  var page = fm(file.content);
  var layoutPage = page.attributes.layout || 'default';
  var layoutTemplate = this.layouts[layoutPage];
  var pageTemplate = this.Handlebars.compile(page.body + '\n');

  this.Handlebars.registerPartial('body', pageTemplate);
  return layoutTemplate(this.datas);
}
