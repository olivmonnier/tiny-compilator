var loadContents = require('./loadContents');

module.exports = function () {
  var self = this;

  if (this.options && this.options.helpers) {
    var loadHelpers = loadContents(this.options.helpers);

    loadHelpers.forEach(function (helper) {
      self.Handlebars.registerHelper(helper.name, helper.content);
    });
  }
}
