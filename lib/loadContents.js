var fs = require('fs');
var path = require('path');
var loadFiles = require('./loadFiles');

module.exports = function (dir) {
  var files = loadFiles(dir);

  return files.map(function (file) {
    var ext = path.extname(file);
    var name = path.basename(file, ext);
    var content = fs.readFileSync(path.join(dir, file), 'utf8');

    return { name: name, content: content };
  });
}
