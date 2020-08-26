const Handlebars = require("handlebars");
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");
const loadFiles = require("./lib/loadFiles");
const loadContents = require("./lib/loadContents");

/**
 * Create a new compilator
 * @class
 * @example
 * var compile = new Compilator({
 *   helpers: 'helpers/',
 *   layouts: 'layouts/',
 *   partials: 'partials/'
 * });
 * compile.render('pages/test.hbs', {
 *   title: 'Hello Evryone'
 * }); => return html elements
 */
class Compilator {
  /**
   *
   * @param {Object} options
   * @param {string} options.helpers - path to helpers
   * @param {string} options.layouts - path to layouts
   * @param {string} options.partials - path to partials
   */
  constructor(options) {
    this.Handlebars = Handlebars;
    this.layouts = [];
    this.options = options || {};

    this.loadHelpers();
    this.loadLayouts();
    this.loadPartials();
  }

  loadHelpers() {
    if (!this.options || !this.options.helpers) return;

    const helpers = loadFiles(this.options.helpers);

    helpers.forEach((helper) => {
      const h = require(helper);

      this.Handlebars.registerHelper(path.basename(helper, ".js"), h);
    });
  }

  loadLayouts() {
    if (!this.options || !this.options.layouts) return;

    const layouts = loadContents(this.options.layouts);

    layouts.forEach(
      ({ name, content }) =>
        (this.layouts[name] = this.Handlebars.compile(content))
    );
  }

  loadPartials() {
    if (!this.options || !this.options.partials) return;

    const partials = loadContents(this.options.partials);

    partials.forEach(({ name, content }) =>
      this.Handlebars.registerPartial(name, content)
    );
  }

  /**
   *
   * @param {string} file - path to page
   * @param {Object} data
   */
  render(file, data) {
    if (!file) return;

    file = fs.readFileSync(file, "utf8");

    const page = matter(file);
    const options = page.data;
    const layoutPage = options.layout || "default";
    const layoutTemplate = this.layouts[layoutPage];
    const pageTemplate = this.Handlebars.compile(page.content + "\n");

    this.Handlebars.registerPartial("body", pageTemplate);

    return layoutTemplate({ ...options, ...data });
  }
}

module.exports = Compilator;
