var loadContents = require('loadContents');

module.exports = function () {
  var self = this;
  var loadHelpers = loadContents(this.options.helpers);

  loadHelpers.forEach(function (helper) {
    self.Handlebars.registerHelper(helper.name, helper.content);
  });
}
