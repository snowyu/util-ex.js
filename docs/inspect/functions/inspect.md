[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [inspect](../README.md) / inspect

# Function: inspect()

> **inspect**(`obj`, `opts`, ...`args`): `string`

Defined in: [src/inspect.js:31](https://github.com/snowyu/util-ex.js/blob/e1b6f7e16ba0797d5deab91e7eed06c0bba0db01/src/inspect.js#L31)

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
