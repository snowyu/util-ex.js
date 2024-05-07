[util-ex](../README.md) / [Exports](../modules.md) / inspect

# Module: inspect

## Table of contents

### Functions

- [export=](inspect.md#export=)

## Functions

### export&#x3D;

▸ **export=**(`obj`, `opts`, `...args`): `string`

Return a string representation of an object, including its properties and nested objects, with customizable options.

Echos the value of a value. Try to print the value out
in the best way possible given the different types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `any` | The object to inspect. |
| `opts` | `any` | Customizable options to control the behavior of the inspection. If it's a boolean, it sets the "showHidden" option. |
| `...args` | `any` | - |

#### Returns

`string`

The formatted string representing the object.

#### Defined in

[src/inspect.js:32](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/inspect.js#L32)
