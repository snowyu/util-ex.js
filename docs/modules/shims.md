[util-ex](../README.md) / [Exports](../modules.md) / \_shims

# Module: \_shims

## Table of contents

### Functions

- [getOwnPropertyNames](shims.md#getownpropertynames)
- [getOwnPropertyNames](shims.md#getownpropertynames-1)
- [keys](shims.md#keys)
- [keys](shims.md#keys-1)

## Functions

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`object`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`any`

#### Defined in

[src/_shims.js:16](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/_shims.js#L16)

___

### getOwnPropertyNames

▸ **getOwnPropertyNames**(`o`): `string`[]

Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | Object that contains the own properties. |

#### Returns

`string`[]

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:182

___

### keys

▸ **keys**(`object`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

`any`

#### Defined in

[src/_shims.js:13](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/_shims.js#L13)

___

### keys

▸ **keys**(`o`): `string`[]

Returns the names of the enumerable string properties and methods of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `object` | Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object. |

#### Returns

`string`[]

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:264
