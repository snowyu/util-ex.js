[util-ex](../README.md) / [Exports](../modules.md) / object/get-all-names

# Module: object/get-all-names

## Table of contents

### References

- [default](object_get_all_names.md#default)

### Functions

- [getAllNames](object_get_all_names.md#getallnames)

## References

### default

Renames and re-exports [getAllNames](object_get_all_names.md#getallnames)

## Functions

### getAllNames

▸ **getAllNames**(`obj`, `inherited?`): `string`[]

Get all names of an object, include non-enumerable properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object to get names from |
| `inherited?` | `boolean` | whether includes inherited properties, defaults to true |

#### Returns

`string`[]

An array of all names of the object

#### Defined in

[src/object/get-all-names.js:8](https://github.com/snowyu/util-ex.js/blob/fac65b1/src/object/get-all-names.js#L8)
