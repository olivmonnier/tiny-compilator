const fs = require("fs");
const path = require("path");

/**
 *
 * @param {string} dir
 */
function loadFiles(dir) {
  return fs.readdirSync(path.join(process.cwd(), dir));
}

module.exports = loadFiles;
