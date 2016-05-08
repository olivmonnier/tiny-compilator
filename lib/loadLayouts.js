var loadContents = require('loadContents');

module.exports = function () {
  var self  = this;
  var loadLayouts = loadContents(this.options.layouts);

  loadLayouts.forEach(function (layout) {
    self.layouts[layout.name] = self.Handlebars.compile(layout.content);
  });
}
