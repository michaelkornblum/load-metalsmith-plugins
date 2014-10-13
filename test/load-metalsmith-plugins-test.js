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

