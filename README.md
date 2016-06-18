# tiny-compilator

Build your stack with Handlebars.js for create static pages. It must be useful with Express.js for return the html view after a http request.

![release](https://img.shields.io/badge/release-1.0.1-blue.svg)
[![travis](https://travis-ci.org/olivmonnier/tiny-compilator.svg)](https://travis-ci.org/olivmonnier/tiny-compilator)

## How to install
```terminal
npm install tiny-compilator
```

## How it works
Create a Compilator instance with in arguments the paths of layouts, helpers & partials folders. Then call render method of your instance with the path of your page and data to pass:
```javascript
var Compilator = require('tiny-compilator');

var compile = new Compilator({
  helpers: 'path/to/helper/folder',
  layouts: 'path/to/layout/folder',
  partials: 'path/to/partials/folder'
});

compile.render('path/to/your/page', data); //=> return html compiled
```

## Page configuration
In top of your page you must declare in attribute the layout chosen as this example:
```html
---
layout: 'default'
---
<!-- html page -->
```

## Layout declaration
In your layout html you must call the partial handlebars 'body' where all the page content must be placed:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    {{> body }}
  </body>
</html>
```
