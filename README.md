### util-ex [![Build Status](https://img.shields.io/travis/snowyu/util-ex.js/master.png)](http://travis-ci.org/snowyu/util-ex.js) [![npm](https://img.shields.io/npm/v/util-ex.svg)](https://npmjs.org/package/util-ex) [![downloads](https://img.shields.io/npm/dm/util-ex.svg)](https://npmjs.org/package/util-ex) [![license](https://img.shields.io/npm/l/util-ex.svg)](https://npmjs.org/package/util-ex)

Browser-friendly enhanced util fully compatible with standard node.js
[util](http://nodejs.org/api/util.html)


This package modifies and enhances the standard `util` from node.js


# API

Full API Documents is here: [Docs](./docs/modules.md)

## defineProperty

    defineProperty(object, key, value[, aOptions])

Define a porperty on the object.


### usage

```js
const defineProperty = require('util-ex/lib/defineProperty')

let propValue = ''
const obj = {}

defineProperty(obj, 'prop', 'simpleValue')
defineProperty(obj, 'prop', undefined, {
  get() {return propValue}
  set(value) {propValue = value}
})
```

## newFunction

    newFunction(name, arguments, body[, scope[, values]])
    newFunction(functionString[, scope[, values]])

create a function via string.

```js
newFunction = require('util-ex/lib/new-function')

var fn = newFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log})
newFunction('function yourFuncName(){}')
newFunction('function yourFuncName(arg1, arg2){return log(arg1+arg2);}', {log:console.log})
newFunction('function yourFuncName(arg1, arg2){return log(arg1+arg2);}', ['log'], [console.log])

//fn.toString() is :
/*
 "function yourFuncName(arg1, arg2) {
    return log(arg1+arg2);
 }"
*/
```
