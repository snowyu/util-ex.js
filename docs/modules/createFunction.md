[util-ex](../README.md) / [Exports](../modules.md) / createFunction

# Module: createFunction

## Table of contents

### Namespaces

- [export&#x3D;](createFunction.export_.md)

### Functions

- [export&#x3D;](createFunction.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`name`, `aArgs?`, `body`, `scope?`, `values?`, `...args`): `Function`

Creates a new function with the given name, arguments, and body, and optionally with the given scope and values.

**`Example`**

```ts
// Create a function with no arguments, with scope 'Math' and values [Math]:
var f = createFunction('myFunc', 'return Math.PI', ['Math'], [Math]);
var f = createFunction('myFunc', 'return Math.PI', {Math: Math});

// Create a function with two arguments, with scope 'Math' and values [Math], and scope 'console' and values [console]:
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', ['Math', 'console'], [Math, console]);
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', {Math, console});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the function. |
| `aArgs?` | `string` \| `string`[] | An array of argument names. or function body if it's string. |
| `body` | `string` | The function body as a string. |
| `scope?` | `any` | An array of scope names, or an object with scope names as keys and their corresponding values as values. |
| `values?` | `any`[] | An array of values corresponding to the scope names, if scope is an array. |
| `...args` | `any` | - |

#### Returns

`Function`

- The newly created function.

#### Defined in

[src/createFunction.js:43](https://github.com/snowyu/util-ex.js/blob/a11fd0d/src/createFunction.js#L43)
