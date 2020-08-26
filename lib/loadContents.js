const fs = require("fs");
const path = require("path");
const loadFiles = require("./loadFiles");

/**
 *
 * @param {string} dir
 */
function loadContent(dir) {
  const files = loadFiles(dir);

  return files.map(function (file) {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const content = fs.readFileSync(file, "utf8");

    return { name, content };
  });
}

module.exports = loadContent;
