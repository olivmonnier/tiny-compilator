var loadContents = require('loadContents');

module.exports = function () {
  var self = this;
  var loadPartials = loadContents(this.options.partials);

  loadPartials.forEach(function (partial) {
    self.Handlebars.registerPartial(partial.name, partial.content);
  });
}
