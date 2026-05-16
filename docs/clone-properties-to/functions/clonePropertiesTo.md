[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [clone-properties-to](../README.md) / clonePropertiesTo

# Function: clonePropertiesTo()

> **clonePropertiesTo**(`dest`, `src`): `any`

Defined in: [src/clone-properties-to.js:25](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/clone-properties-to.js#L25)

Clone all own properties of a source object to a destination object.

## Parameters

### dest

`any`

The destination object to clone the properties to.

### src

`any`

The source object to clone the properties from.

## Returns

`any`

- The destination object with cloned properties from the source object.

## Description

This function clones all own properties of a source object to a destination object.

## Example

```ts
var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3 };

clonePropertiesTo(obj2, obj1); // obj2 = { a: 1, b: 2, c: 3 }
```
