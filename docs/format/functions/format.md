[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [format](../README.md) / format

# Function: format()

> **format**(`f`, ...`args`): `string`

Defined in: [util-ex.js/src/format.js:28](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/format.js#L28)

Formats a string using placeholder tokens.

If the first argument is a string, it is treated as a format string that
specifies placeholders for the subsequent arguments, which will be inserted
into the string in place of the placeholders. The placeholders are
specified using '%s' for string, '%d' for number, and '%j' for JSON.

If the first argument is not a string, all arguments will be inspected and
concatenated into a space-separated string.

## Parameters

### f

`any`

The format string or object to be formatted.

### args

...`any`[]

The values to be inserted into the format string.

## Returns

`string`

The formatted string.

## Example

```ts
format('%s %s', 'hello', 'world'); // 'hello world'
format('%d %s', 42, 'answer'); // '42 answer'
format('%j', { foo: 'bar' }); // '{'foo':'bar'}'
format('no placeholders', 'needed'); // 'no placeholders needed'
```
