var fs = require('fs');
var test = require("tap").test;
var Metalsmith = require("metalsmith");
var plugins = require("../load-metalsmith-plugins")();

test("loads metalsmith plugins", function(t) {
  Metalsmith(__dirname)
  .use(plugins.markdown())
  .build(function() {
    t.plan(2);
    var file = __dirname + '/build/hello.html';
    t.ok(true, fs.existsSync(file));
    t.equal(fs.readFileSync(file,{encoding: 'utf-8'}),
        "<h1 id=\"hello-world\">Hello world</h1>\n");
    t.end();
  });
});

test("loads metalsmith plugins (camelCase)", function(t) {
  var plugins = require("../load-metalsmith-plugins")({camelCase: true});
  Metalsmith(__dirname)
  .use(plugins.markdown())
  .use(plugins.buildDate())
  .build(function(err, files) {
    t.plan(3);
    var file = __dirname + '/build/hello.html';
    t.ok(true, fs.existsSync(file));
    t.ok(this._metadata.date instanceof Date, 'Must have a date');
    t.equal(fs.readFileSync(file,{encoding: 'utf-8'}),
        "<h1 id=\"hello-world\">Hello world</h1>\n");
    t.end();
  });
});

