[util-ex](../README.md) / [Exports](../modules.md) / object/get-non-enumerable-names

# Module: object/get-non-enumerable-names

## Table of contents

### References

- [default](object_get_non_enumerable_names.md#default)

### Functions

- [getNonEnumerableNames](object_get_non_enumerable_names.md#getnonenumerablenames)

## References

### default

Renames and re-exports [getNonEnumerableNames](object_get_non_enumerable_names.md#getnonenumerablenames)

## Functions

### getNonEnumerableNames

▸ **getNonEnumerableNames**(`aObject`): `string`[]

Returns an array of non-enumerable owner property names of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object to retrieve non-enumerable property names from. |

#### Returns

`string`[]

- An array of non-enumerable property names of the object.

**`Example`**

```ts
var obj = Object.create(null, {
  a: { value: 1 },
  b: { value: 2, enumerable: true }
});

var nonEnumProps = getNonEnumerableNames(obj); // nonEnumProps = ['a']
```

#### Defined in

[src/object/get-non-enumerable-names.js:19](https://github.com/snowyu/util-ex.js/blob/efca373/src/object/get-non-enumerable-names.js#L19)
