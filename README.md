# tiny-compilator

![release](https://img.shields.io/badge/release-1.0.9-blue.svg)
[![travis](https://travis-ci.org/olivmonnier/tiny-compilator.svg)](https://travis-ci.org/olivmonnier/tiny-compilator)

Build your stack with Handlebars.js for create static pages.

## How to install

```terminal
npm install tiny-compilator handlebars
```

## How it works

Create a Compilator instance with in arguments the paths (glob pattern is available) of layouts, helpers & partials folders. Then call render method of your instance with the path of your page and data to pass:

```javascript
const Compilator = require("tiny-compilator");

const compile = new Compilator({
  helpers: "path/to/helper/folder/**/*.js",
  layouts: "path/to/layout/folder",
  partials: "path/to/partials/folder/**",
});

compile.render("path/to/your/page", data); //=> return html compiled
```

## Page configuration

In top of your page you must declare in attribute the layout chosen as this example:

```html
---
layout: "default"
---

<!-- html page -->
```

## Layout declaration

In your layout html you must call the partial handlebars 'body' where all the page content must be placed:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    {{> body }}
  </body>
</html>
```
