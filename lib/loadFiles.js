const fs = require("fs");
const path = require("path");
const glob = require("glob");

/**
 *
 * @param {string} dir
 */
function loadFiles(dir) {
  let srcPath = path.join(process.cwd(), dir)

  if (fs.existsSync(srcPath) && fs.lstatSync(srcPath).isDirectory()) {
    srcPath = path.join(srcPath, '/**')
  } 
  
  return glob.sync(srcPath, { nodir: true })
}

module.exports = loadFiles;
