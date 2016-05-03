var assert = require('chai').assert;
var expect = require('chai').expect;
var loadFiles = require('../lib/loadFiles');
var loadContents = require('../lib/loadContents');

describe('Load Files', function () {
  it('return a list of files', function (done) {
    var files = loadFiles('test');

    assert.isArray(files, 'Return an array');
    done();
  });
});

describe('Load content in folder', function () {
  it('return a list of objects', function (done) {
    var contents = loadContents('test/fixtures/layouts');

    assert.isObject(contents[0], 'Return a list of object');
    done();
  });

  it('return the filename foreach files', function (done) {
    var contents = loadContents('test/fixtures/layouts');

    expect(contents[0].name).to.equal('default');
    done();
  });

  it('return the string content foreach files', function (done) {
    var contents = loadContents('test/fixtures/layouts');

    assert.isString(contents[0].content, 'Return a string');
    expect(contents[0].content).to.equal('<h1>Hello World</h1>\r\n<h2>{{ title }}</h2>\r\n');
    done();
  });
});
