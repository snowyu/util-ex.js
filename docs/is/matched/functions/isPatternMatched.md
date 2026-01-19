[**util-ex**](../../../README.md)

***

[util-ex](../../../modules.md) / [is/matched](../README.md) / isPatternMatched

# Function: isPatternMatched()

> **isPatternMatched**(`value`, `pattern`, `included?`): `boolean`

Defined in: [src/is/matched.js:36](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/is/matched.js#L36)

Checks if a string value matches a specified pattern.

This function tests whether the provided string value matches the given pattern.
The pattern can be either a RegExp object, a string that can be converted to a RegExp,
or a plain string for direct comparison or inclusion check.

## Parameters

### value

`string`

The string value to be tested against the pattern.

### pattern

The pattern to match against. Can be:
  - A RegExp object
  - A string that can be converted to a RegExp (e.g., "/pattern/flags")
  - A plain string for direct matching

`string` | `RegExp`

### included?

`boolean`

Flag to determine matching strategy when pattern is a string:
  - If true, checks if the value contains the pattern string
  - If false, checks if the value strictly equals the pattern string

## Returns

`boolean`

Returns true if the value matches the pattern according to the specified rules,
                   otherwise returns false.

## Example

```ts
// RegExp pattern matching
isPatternMatched("hello world", /hello/); // true

// String pattern with strict equality
isPatternMatched("test", "test"); // true
isPatternMatched("test", "testing"); // false

// String pattern with inclusion check
isPatternMatched("hello world", "world", true); // true

// RegExp string pattern
isPatternMatched("123", "/\\d+/"); // true
```
