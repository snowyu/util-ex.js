[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [inspect](../README.md) / inspect

# Function: inspect()

> **inspect**(`obj`, `opts`, ...`args`): `string`

Defined in: [src/inspect.js:31](https://github.com/snowyu/util-ex.js/blob/237c1aa529462fe6cbeaa8d09129766e345f5819/src/inspect.js#L31)

Return a string representation of an object, including its properties and nested objects, with customizable options.

Echos the value of a value. Try to print the value out
in the best way possible given the different types.

## Parameters

### obj

`any`

The object to inspect.

### opts

`any`

Customizable options to control the behavior of the inspection. If it's a boolean, it sets the "showHidden" option.

### args

...`any`[]

## Returns

`string`

The formatted string representing the object.
