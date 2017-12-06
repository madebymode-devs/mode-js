---
title: Install
name: install
category: Install
hologram: true
---
## 1. Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm)

```js_example
npm i lata --save-dev
```

## 2. Copy starter kit

```js_example
mkdir -p resources/assets/js/
rsync -avz node_modules/lata/starter-kit/ resources/assets/js/
```

## 3. Build with [gulp](https://gulpjs.com/)

```js_example
npm i babel-core babel-loader babel-preset-env core-js gulp uglifyjs-webpack-plugin vinyl-named webpack-stream --save-dev
```

### Sample `gulpfile.js`

```js_example
const gulp = require('gulp');
const webpack = require('webpack-stream');
const named = require('vinyl-named');

// JS
const JS_CONFIG = require('./webpack.config.js');
const JS_SRC = ['./resources/assets/js/*.js'];
const JS_DEST = './public/js';

gulp.task('scripts', function() {
  return gulp.src(JS_SRC)
    .pipe(named())
    .pipe(webpack(JS_CONFIG))
    .pipe(gulp.dest(JS_DEST));
});

// Default
gulp.task('default', ['scripts']);
```

### Sample `webpack.config.js`

```js_example
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
};
```

## 4. <small class="optional">Optional</small> Keep clean code with [EditorConfig](http://editorconfig.org/) and [JSHint](http://jshint.com/install/)

```js_example
npm i -g jshint
cp node_modules/lata/.editorconfig .editorconfig
cp node_modules/lata/.jshintrc .jshintrc
```
