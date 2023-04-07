[util-ex](../README.md) / [Exports](../modules.md) / object/map

# Module: object/map

## Table of contents

### References

- [default](object_map.md#default)

### Functions

- [map](object_map.md#map)

## References

### default

Renames and re-exports [map](object_map.md#map)

## Functions

### map

▸ **map**(`aObject`, `aOptions?`): `any`[]

Returns an array containing the values of all enumerable or non-enumerable properties of an object.

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object to map properties from. |
| `aOptions?` | `Object` | Optional parameter to specify options for mapping. |
| `aOptions.enumerable` | `boolean` | If true, enumerable properties are included in the mapping. |
| `aOptions.nonEnumerable` | `boolean` | If true, non-enumerable properties are included in the mapping. |

#### Returns

`any`[]

An array containing the mapped property values.

#### Defined in

[object/map.js:30](https://github.com/snowyu/util-ex.js/blob/b4dc093/src/object/map.js#L30)
