[**util-ex**](../../../README.md)

***

[util-ex](../../../modules.md) / [object/map](../README.md) / map

# Function: map()

> **map**(`aObject`, `aOptions?`): `any`[]

Defined in: [util-ex.js/src/object/map.js:30](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/object/map.js#L30)

Returns an array containing the values of all enumerable or non-enumerable properties of an object.

## Parameters

### aObject

`any`

The object to map properties from.

### aOptions?

Optional parameter to specify options for mapping.

#### enumerable?

`boolean`

If true, enumerable properties are included in the mapping.

#### nonEnumerable?

`boolean`

If true, non-enumerable properties are included in the mapping.

## Returns

`any`[]

An array containing the mapped property values.

## Example

```ts
const myObj = {a: 1, b: 2, c: 3};
Object.defineProperty(myObj, 'p', {
  value: 'value2',
  enumerable: false
});

// Returns [1, 2, 3]
const result1 = map(myObj);

// Returns ['value2']
const result2 = map(myObj, {enumerable: false, nonEnumerable: true});
```
