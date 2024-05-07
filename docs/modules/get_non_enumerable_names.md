[util-ex](../README.md) / [Exports](../modules.md) / get-non-enumerable-names

# Module: get-non-enumerable-names

## Table of contents

### Namespaces

- [export=](get_non_enumerable_names.export_.md)

### Functions

- [export=](get_non_enumerable_names.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`aObject`): `string`[]

Returns an array of non-enumerable property names of an object.

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

[src/get-non-enumerable-names.js:1](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/get-non-enumerable-names.js#L1)
