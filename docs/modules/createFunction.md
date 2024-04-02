[util-ex](../README.md) / [Exports](../modules.md) / createFunction

# Module: createFunction

## Table of contents

### References

- [default](createFunction.md#default)

### Functions

- [createFunction](createFunction.md#createfunction)

## References

### default

Renames and re-exports [createFunction](createFunction.md#createfunction)

## Functions

### createFunction

▸ **createFunction**(`name`, `aArgs?`, `body?`, `scope?`, `values?`, `...args`): `Function`

Creates a new function with the given name, arguments, and body, and optionally with the given scope and values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the function. |
| `aArgs?` | `string` \| `string`[] | An array of argument names. or function body if it's string. |
| `body?` | `string` | The function body as a string. |
| `scope?` | `any` | An array of scope names, or an object with scope names as keys and their corresponding values as values. |
| `values?` | `any`[] | An array of values corresponding to the scope names, if scope is an array. |
| `...args` | `any` | - |

#### Returns

`Function`

- The newly created function.

**`Example`**

```ts
// Create a function with no arguments, with scope 'Math' and values [Math]:
var f = createFunction('myFunc', 'return Math.PI', ['Math'], [Math]);
var f = createFunction('myFunc', 'return Math.PI', {Math: Math});

// Create a function with two arguments, with scope 'Math' and values [Math], and scope 'console' and values [console]:
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', ['Math', 'console'], [Math, console]);
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', {Math, console});
```

#### Defined in

[src/createFunction.js:33](https://github.com/snowyu/util-ex.js/blob/c071696/src/createFunction.js#L33)
