const path = require('path');
const { assert, expect } = require('chai');
const loadFiles = require('../lib/loadFiles');
const loadContents = require('../lib/loadContents');
const Compilator = require('../index');

describe('Load Files', function () {
  it('return a list of files', function (done) {
    const files = loadFiles('test');

    assert.isArray(files, 'Return an array');
    done();
  });
});

describe('Load content in folder', function () {
  it('return a list of objects', function (done) {
    const contents = loadContents('test/fixtures/layouts');

    assert.isObject(contents[0], 'Return a list of object');
    done();
  });

  it('return the filename foreach files', function (done) {
    const contents = loadContents('test/fixtures/layouts');

    expect(contents[0].name).to.equal('default');
    done();
  });

  it('return the string content foreach files', function (done) {
    const contents = loadContents('test/fixtures/layouts');

    assert.isString(contents[0].content, 'Return a string');
    expect(contents[0].content).to.equal('<h1>Hello World</h1>{{> body }}');
    done();
  });
});

describe('Compilation works', function () {
  it('return instance of Compilator', function (done) {
    const c = new Compilator();

    assert.instanceOf(c, Compilator, 'Return an instance');
    done();
  });

  it('return html elements after run render method', function (done) {
    const c = new Compilator({
      helpers: path.join(process.cwd(), 'test/fixtures/helpers'),
      layouts: 'test/fixtures/layouts/**',
      partials: 'test/fixtures/partials/**'
    });
    const page = c.render('test/fixtures/pages/test.hbs', {
      title: 'Hello Everyone'
    });

    expect(page).to.equal('<h1>Hello World</h1><h2>HELLO EVERYONE</h2><b>test param</b>\n');
    done();
  });
});
