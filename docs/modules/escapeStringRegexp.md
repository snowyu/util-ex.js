[util-ex](../README.md) / [Exports](../modules.md) / escapeStringRegexp

# Module: escapeStringRegexp

## Table of contents

### References

- [default](escapeStringRegexp.md#default)

### Functions

- [escapeStringRegexp](escapeStringRegexp.md#escapestringregexp)

## References

### default

Renames and re-exports [escapeStringRegexp](escapeStringRegexp.md#escapestringregexp)

## Functions

### escapeStringRegexp

▸ **escapeStringRegexp**(`string`): `string`

Escapes a string for use in a regular expression pattern.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to be escaped. Must be of type 'string', otherwise a `TypeError` will be thrown. |

#### Returns

`string`

- The escaped string where special characters are escaped to ensure they are not interpreted as special syntax within a regular expression.

**`Example`**

```ts
const input = "Hello, world! (It's me.)";
const escaped = escapeStringRegexp(input);
console.log(escaped); // Outputs: "Hello, world! \(It's me\.\)"
```

#### Defined in

[src/escapeStringRegexp.js:12](https://github.com/snowyu/util-ex.js/blob/5250ebf/src/escapeStringRegexp.js#L12)
