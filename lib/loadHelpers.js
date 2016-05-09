var loadFiles = require('./loadFiles');
var path = require('path');

module.exports = function () {
  var self = this;

  if (this.options && this.options.helpers) {
    var loadHelpers = loadFiles(this.options.helpers);

    loadHelpers.forEach(function (helper) {
      var helperPath = path.join(process.cwd(), self.options.helpers, helper);
      var h = require(helperPath);

      self.Handlebars.registerHelper(path.basename(helper, '.js'), h);
    });
  }
}
