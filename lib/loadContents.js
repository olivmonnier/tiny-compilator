const fs = require("fs");
const path = require("path");
const loadFiles = require("./loadFiles");

/**
 *
 * @param {string} dir
 */
function loadContent(dir) {
  var files = loadFiles(dir);

  return files.map(function (file) {
    var ext = path.extname(file);
    var name = path.basename(file, ext);
    var content = fs.readFileSync(path.join(process.cwd(), dir, file), "utf8");

    return { name: name, content: content };
  });
}

module.exports = loadContent;
