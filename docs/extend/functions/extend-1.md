[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [extend](../README-1.md) / extend

# Function: extend()

> **extend**(`dest`, `sources`, `filter`): `any`

Defined in: [util-ex.js/src/extend.js:35](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/extend.js#L35)

Extends an object with properties from one or more source objects.

## Parameters

### dest

`any`

The object to be extended.

### sources

`any`

The source object(s) from which to extend the `dest` object.

### filter

`Function`

An optional function to filter which properties to extend. It should take two arguments (`key` and `value`) and return `true` if the property should be extended, `false` otherwise.

## Returns

`any`

- The extended `dest` object.

## Examples

```ts
var dest = { a: 1 };
var src1 = { b: 2 };
var src2 = { c: 3 };
extend(dest, src1, src2);
// dest => { a: 1, b: 2, c: 3 }
```

```ts
var dest = { a: 1 };
var src1 = { b: 2 };
var src2 = { c: 3 };
var filter = function(key, value) {
  return key !== 'b.js';
};
extend(dest, [src1, src2], filter);
// dest => { a: 1, c: 3 }
```
