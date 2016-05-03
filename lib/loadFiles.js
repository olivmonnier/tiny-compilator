var fs = require('fs');
var path = require('path');

module.exports = function (dir) {
  return fs.readdirSync(path.join(process.cwd(), dir));
}
