[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [createFunction](../README.md) / createFunction

# Function: createFunction()

> **createFunction**(`name`, `aArgs?`, `body?`, `scope?`, `values?`, ...`args?`): `Function`

Defined in: [src/createFunction.js:33](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/createFunction.js#L33)

Creates a new function with the given name, arguments, and body, and optionally with the given scope and values.

## Parameters

### name

`string`

The name of the function.

### aArgs?

An array of argument names. or function body if it's string.

`string` | `string`[]

### body?

`string`

The function body as a string.

### scope?

`any`

An array of scope names, or an object with scope names as keys and their corresponding values as values.

### values?

`any`[]

An array of values corresponding to the scope names, if scope is an array.

### args?

...`any`[]

## Returns

`Function`

- The newly created function.

## Example

```ts
// Create a function with no arguments, with scope 'Math' and values [Math]:
var f = createFunction('myFunc', 'return Math.PI', ['Math'], [Math]);
var f = createFunction('myFunc', 'return Math.PI', {Math: Math});

// Create a function with two arguments, with scope 'Math' and values [Math], and scope 'console' and values [console]:
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', ['Math', 'console'], [Math, console]);
var g = createFunction('myFunc', ['a', 'b'], 'console.log(a + b);', {Math, console});
```
