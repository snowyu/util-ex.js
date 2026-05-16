[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [\_create-function](../README.md) / \_createFunction

# Function: \_createFunction()

> **\_createFunction**(`body`, `scope?`, `values?`, ...`args?`): `Function`

Defined in: [src/\_create-function.js:30](https://github.com/snowyu/util-ex.js/blob/cebdb0aecefb30776842a60debb17bdfed5c4f88/src/_create-function.js#L30)

Create a function using the given body and scope.

## Parameters

### body

`string`

The body of the function to create.

### scope?

`any`

The scope of the function, as an object with key/value pairs or an array of strings.

### values?

`any`[]

The values to use for the scope, if scope is an array.

### args?

...`any`[]

## Returns

`Function`

- The created function.

## Example

```ts
var fn = _createFunction('function yourFuncName(arg1, arg2){log(arg1+arg2);}', {log:console.log});
  fn(2,3); //print 5
```
