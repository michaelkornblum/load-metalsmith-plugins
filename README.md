# load-metalsmith-plugins [![Build Status](https://travis-ci.org/karlbright/load-metalsmith-plugins.svg?branch=master)](https://travis-ci.org/karlbright/load-metalsmith-plugins)
> Load Metalsmith plugins found within package.json.

## Example

```
var Metalsmith = require("metalsmith");
var plugins = require("load-metalsmith-plugins")();

Metalsmith(__dirname)
.use(plugins.markdown())
.build();
```

## Options

* camelCase (Boolean) - CamelCase the mutliword plugins (so
  `metalsmith-build-date` would turn into `plugins.buildDate`)

  ```
  var plugins = require("load-metalsmith-plugins")({camelCase: true});
  ```

## License

[MIT](http://opensource.org/licenses/MIT) © [Karl Brightman](http://karlbright.org)

