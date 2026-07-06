[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [new-function](../README.md) / newFunction

# Function: newFunction()

> **newFunction**(`name`, `aArgs?`, `body?`, `scope?`, `values?`, ...`args?`): `Function`

Defined in: [util-ex.js/src/new-function.js:84](https://github.com/snowyu/util-ex.js/blob/05c14deed4d51d2368c8894096c4ebbc3fa6b17c/src/new-function.js#L84)

Creates a new function with the given name, arguments, body, scope and values.

* If the first argument is an **expression** (not a valid identifier and not a full function string):
  `newFunction(expression, [name], [scope], [values])`
  - The expression is automatically wrapped in a function and prefixed with `return` if needed.
  - If the second argument is a valid identifier, it's used as the function name.

* If only one argument is provided and it is a **function string**, returns a new function with the same code.
* If only one argument is provided and it is an **identifier**, returns a new empty function with that name.
* If multiple arguments are provided in the traditional way:
  `newFunction(name, aArgs, body, [scope], [values])`

## Parameters

### name

The name of the function, the function itself, or an expression.

`string` | `Function`

### aArgs?

`any`

An array of argument names, or the function name (if first arg is expression), or scope.

### body?

`any`

The body of the function, or scope (if first arg is expression).

### scope?

`any`

The scope for the function, or values (if first arg is expression).

### values?

`any`[]

The values to apply to the scope.

### args?

...`any`[]

## Returns

`Function`

A new function with the given name, arguments, body, scope and values.

## Example

```ts
// Expression support (New!)
var add = newFunction('a + b', {a: 1, b: 2});
add(); // 3
var namedAdd = newFunction('a + b', 'add', {a: 1, b: 2});
namedAdd.name; // 'add'
var asyncAdd = newFunction('await Promise.resolve(a + b)', {a: 1, b: 2});

// Traditional usage
var add1 = newFunction(`function add(a,b) {return a+b}`);
var add = newFunction('add', ['a', 'b'], 'return a + b;');
var result = add(1, 2); // result is 3
var greet = newFunction('greet', ['name'], 'console.log("Hello, " + name + "!");');
greet('John'); // Output: Hello, John!
const sleep = newFunction('sleep', ['ms'], 'return new Promise(resolve => setTimeout(resolve, ms));');
const wait1Second = newFunction('async wait1Second', [], `await sleep(1000);`, {sleep});
await wait1Second()
```
