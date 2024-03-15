[util-ex](../README.md) / [Exports](../modules.md) / new-function

# Module: new-function

## Table of contents

### References

- [default](new_function.md#default)

### Functions

- [newFunction](new_function.md#newfunction)

## References

### default

Renames and re-exports [newFunction](new_function.md#newfunction)

## Functions

### newFunction

▸ **newFunction**(`name`, `aArgs`, `body`, `scope`, `values`, `...args`): `Function`

Creates a new function with the given name, arguments, body, scope and values.

* If only one argument is provided and it is a function, returns a new function with the same code.
* If only one argument is provided and it is not a function, returns a new empty function with the given name.
* If multiple arguments are provided, creates a new function with the given name, arguments and body.

**`Example`**

```ts
var add = newFunction('add', ['a', 'b'], 'return a + b;');
var result = add(1, 2); // result is 3
var greet = newFunction('greet', ['name'], 'console.log("Hello, " + name + "!");');
greet('John'); // Output: Hello, John!
var fn = newFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
function sub(a,b) {
  log(a-b);
  return a-b;
}
var subWithLog=newFunction(sub, {log:console.log})
subWithLog(5,2); // print 3
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `Function` | The name of the function or the function itself. |
| `aArgs` | `string`[] | An array of argument names for the function. |
| `body` | `string` | The body of the function. |
| `scope` | `any` | The scope for the function. |
| `values` | `any` | The values to apply to the scope. |
| `...args` | `any` | - |

#### Returns

`Function`

A new function with the given name, arguments, body, scope and values.

#### Defined in

[src/new-function.js:45](https://github.com/snowyu/util-ex.js/blob/fa686d8/src/new-function.js#L45)
