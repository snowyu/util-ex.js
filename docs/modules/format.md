[util-ex](../README.md) / [Exports](../modules.md) / format

# Module: format

## Table of contents

### References

- [default](format.md#default)

### Functions

- [format](format.md#format)

## References

### default

Renames and re-exports [format](format.md#format)

## Functions

### format

▸ **format**(`f`, `...args`): `string`

Formats a string using placeholder tokens.

If the first argument is a string, it is treated as a format string that
specifies placeholders for the subsequent arguments, which will be inserted
into the string in place of the placeholders. The placeholders are
specified using '%s' for string, '%d' for number, and '%j' for JSON.

If the first argument is not a string, all arguments will be inspected and
concatenated into a space-separated string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `f` | `any` | The format string or object to be formatted. |
| `...args` | `any` | The values to be inserted into the format string. |

#### Returns

`string`

The formatted string.

**`Example`**

```ts
format('%s %s', 'hello', 'world'); // 'hello world'
format('%d %s', 42, 'answer'); // '42 answer'
format('%j', { foo: 'bar' }); // '{'foo':'bar'}'
format('no placeholders', 'needed'); // 'no placeholders needed'
```

#### Defined in

[src/format.js:28](https://github.com/snowyu/util-ex.js/blob/bfdf9ef/src/format.js#L28)
