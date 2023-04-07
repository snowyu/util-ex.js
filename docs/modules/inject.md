[util-ex](../README.md) / [Exports](../modules.md) / inject

# Module: inject

## Table of contents

### References

- [default](inject.md#default)

### Namespaces

- [inject](inject.inject.md)

### Functions

- [inject](inject.md#inject)

## References

### default

Renames and re-exports [inject](inject.md#inject)

## Functions

### inject

▸ **inject**(`aOrgFunc`, `aBeforeExec`, `aAfterExec`): `Function`

Wraps a function and executes code before and/or after the wrapped function.

**`Throws`**

If aAfterExec is not a function and an error occurs while executing the wrapped function.

**`Example`**

```js
// Wrapping a function with injectFunc
const originalFunc = (a, b) => a + b;
const beforeFunc = (a, b) => console.log(`Before execution: a = ${a}, b = ${b}`);
const afterFunc = (result) => console.log(`After execution: result = ${result}`);
const wrappedFunc = inject(originalFunc, beforeFunc, afterFunc);
const result = wrappedFunc(1, 2); // Logs "Before execution: a = 1, b = 2" and "After execution: result = 3"
```

**`Example`**

```js
// Wrapping a function with injectFunc and modifying arguments and return value
const Arguments = injectFunc.Arguments
const originalFunc = (a, b) => a + b;
const beforeFunc = (a, b) => {
  console.log(`Before execution: a = ${a}, b = ${b}`);
  return new Arguments([a * 2, b * 3]);
};
const afterFunc = (result, isDenied) => {
  console.log(`After execution: result = ${result}, isDenied = ${isDenied}`);
  return result * 2;
};
const wrappedFunc = inject(originalFunc, beforeFunc, afterFunc);
const result = wrappedFunc(1, 2); // Logs "Before execution: a = 1, b = 2", "After execution: result = 6, isDenied = false"
console.log(result); // Output: 12
```

**`Example`**

```js
// Wrapping a function with injectFunc and not executing the original function
const originalFunc = (a, b) => a + b;
const beforeFunc = (a, b) => {
  console.log(`Before execution: a = ${a}, b = ${b}`);
  return "Not executing original function";
};
const afterFunc = (result, isDenied) => {
  console.log(`After execution: result = ${result}, isDenied = ${isDenied}`);
  return "Modified return value";
};
const wrappedFunc = inject(originalFunc, beforeFunc, afterFunc);
const result = wrappedFunc(1, 2); // Logs "Before execution: a = 1, b = 2", "After execution: result = Modified return value, isDenied = true"
console.log(result); // Output: "Modified return value"
```

**`Example`**

```js
// Wrapping a function with injectFunc and getting the original function's error
const originalFunc = () => {
  throw new Error("Original function error");
};
const beforeFunc = () => {
  console.log("Before execution");
};
const afterFunc = (result, isDenied) => {
  console.log(`After execution: result = ${result}, isDenied = ${isDenied}`);
};
const wrappedFunc = inject(originalFunc, beforeFunc, afterFunc);
wrappedFunc(); // Logs "Before execution", "After execution: result = [Error: Original function error], isDenied = false"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aOrgFunc` | `Function` | The function to be wrapped. |
| `aBeforeExec` | `Function` | A function to be executed before the wrapped function `aOrgFunc`. |
| `aAfterExec` | `Function` | A function to be executed after the wrapped function `aOrgFunc`. |

#### Returns

`Function`

A new function that wraps the original function.

BeforeExec:
If `aBeforeExec` is a function, it will be called with the same context and arguments as the wrapped function.
- If it returns an `Arguments` object, the wrapped function will be called with the modified arguments.
- If it returns a value other than `undefined`, the wrapped function will not be called and this value will be returned as result instead.

AfterExec:
If `aAfterExec` is a function, it will be called with the same context, arguments with additional the result of the `aOrgFunc` and isDenied flag.
- If the `aOrgFunc` throws an error, the `result` parameter will be an `Error` object.
- If `aAfterExec` returns a value, it will be used as the final result of the wrapped function.
- If `isDenied` parameter is true, it means `aOrgFunc` was not called during execution of the wrapped function.

#### Defined in

[inject.js:128](https://github.com/snowyu/util-ex.js/blob/de980c9/src/inject.js#L128)
