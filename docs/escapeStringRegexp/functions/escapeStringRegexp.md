[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [escapeStringRegexp](../README.md) / escapeStringRegexp

# Function: escapeStringRegexp()

> **escapeStringRegexp**(`string`): `string`

Defined in: [src/escapeStringRegexp.js:12](https://github.com/snowyu/util-ex.js/blob/237c1aa529462fe6cbeaa8d09129766e345f5819/src/escapeStringRegexp.js#L12)

Escapes a string for use in a regular expression pattern.

## Parameters

### string

`string`

The string to be escaped. Must be of type 'string', otherwise a `TypeError` will be thrown.

## Returns

`string`

- The escaped string where special characters are escaped to ensure they are not interpreted as special syntax within a regular expression.

## Example

```ts
const input = "Hello, world! (It's me.)";
const escaped = escapeStringRegexp(input);
console.log(escaped); // Outputs: "Hello, world! \(It's me\.\)"
```
