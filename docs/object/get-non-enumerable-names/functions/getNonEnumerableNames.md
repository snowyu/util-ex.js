[**util-ex**](../../../README.md)

***

[util-ex](../../../modules.md) / [object/get-non-enumerable-names](../README.md) / getNonEnumerableNames

# Function: getNonEnumerableNames()

> **getNonEnumerableNames**(`aObject`): `string`[]

Defined in: [util-ex.js/src/object/get-non-enumerable-names.js:19](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/object/get-non-enumerable-names.js#L19)

Returns an array of non-enumerable owner property names of an object.

## Parameters

### aObject

`any`

The object to retrieve non-enumerable property names from.

## Returns

`string`[]

- An array of non-enumerable property names of the object.

## Example

```ts
var obj = Object.create(null, {
  a: { value: 1 },
  b: { value: 2, enumerable: true }
});

var nonEnumProps = getNonEnumerableNames(obj); // nonEnumProps = ['a']
```
