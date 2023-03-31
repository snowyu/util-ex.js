[util-ex](../README.md) / [Exports](../modules.md) / object/get-non-enumerable-names

# Module: object/get-non-enumerable-names

## Table of contents

### Namespaces

- [export&#x3D;](object_get_non_enumerable_names.export_.md)

### Functions

- [export&#x3D;](object_get_non_enumerable_names.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aObject`): `string`[]

Returns an array of non-enumerable property names of an object.

**`Example`**

```ts
var obj = Object.create(null, {
  a: { value: 1 },
  b: { value: 2, enumerable: true }
});

var nonEnumProps = getNonEnumerableNames(obj); // nonEnumProps = ['a']
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The object to retrieve non-enumerable property names from. |

#### Returns

`string`[]

- An array of non-enumerable property names of the object.

#### Defined in

[src/object/get-non-enumerable-names.js:19](https://github.com/snowyu/util-ex.js/blob/10dfb41/src/object/get-non-enumerable-names.js#L19)
