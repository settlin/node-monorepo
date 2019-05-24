# spacebars-loader

Inspired from https://github.com/xamfoo/spacebars-loader
A plugin for webpack to compile Spacebars templates for running on a Meteor platform. It can be used with https://github.com/ardatan/meteor-webpack to use blaze templates.


## Installation

```
meteor npm install spacebars-loader --save-dev
meteor remove blaze-html-templates aldeed:template-extension spacebars-compiler standard-app-packages
meteor add spacebars blaze underscore
```

Basically, since `ardatan:meteor-webpack` is itself a registered as an `html` compiler, we can not use the `blaze-html-templates` package, which is dependent on the compiler `templating`. Instead we ask webpack to use this loader and compile the templates into required `Template.<name>`.

## Usage

### webpack.config.js

```javascript
module.exports = {
  ...
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'spacebars-loader'
      }
    ]
  }
};
```

### Initialize Template

Since we are not using `templating`, we do not have direct access to `Template`. We can enable this by doing,

```javascript
window.Template = Blaze.Template;
```

as the very first line of our client entry file.

That's it. Now all your templates should work.


# Extra (Optional) Usage

### Query options

- `attachGlobal` (default=true)
  - Don't attach template to `Template` object if `false`
  - Example: `spacebars-loader?attachGlobal=false`

## Output

The loader compiles a Spacebars template

```html
<template name='myTemplate'>
  <div>
    <h1>My Template</h1>
  </div>
</template>
```

to a Meteor compatible output:

```javascript
module.exports.template = new Blaze.Template("Template.myTemplate", (function () {
  var view = this; return HTML.DIV("\n    ", HTML.H1("My Template"), "\n  ");
}));
Blaze.Template.__checkName("myTemplate");
Blaze.Template["myTemplate"] = module.exports.template;
```

The exports allow you to use it in a JS file like this:

```javascript
import {template} from './myTemplate.html';

template.onCreated(function () {
  console.log('Created a template!');
});
```
