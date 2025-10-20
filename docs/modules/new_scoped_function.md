[util-ex](../README.md) / [Exports](../modules.md) / new-scoped-function

# Module: new-scoped-function

## Table of contents

### Functions

- [newScopedFunction](new_scoped_function.md#newscopedfunction)

## Functions

### newScopedFunction

▸ **newScopedFunction**(`name`, `argNames`, `body`, `scope`): `Function`

Creates an executable function with dynamic scope binding

Unlike statically scoped functions, this rebinds scope variables on every execution,
allowing runtime updates to the execution environment. The function achieves this
through closure-delayed scope binding, regenerating the target function on each call.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Function name (for debugging and stack traces) |
| `argNames` | `string`[] | Formal parameter names (array format) |
| `body` | `string` | Function body code (as JavaScript string) |
| `scope` | `any` | Execution scope object (key-value pairs) |

#### Returns

`Function`

Executable function that:
  - Accepts arguments defined in `argNames`
  - Regenerates the function using current `scope` on each call
  - Returns the execution result

**`Example`**

```ts
// Basic usage
const scopedFunc = newScopedFunction(
  'add',
  ['x'],
  'return x + y',
  { y: 10 } // Initial scope
);
scopedFunc(5); // Returns 15

// Dynamic scope update
const scope = { y: 20 };
const updatableFunc = newScopedFunction('add', ['x'], 'return x + y', scope);
updatableFunc(5); // Returns 25
scope.y = 100;
updatableFunc(5); // Returns 105
```

**`See`**

newFunction Underlying static-scope function generator

**`Warning`**

Performance note: Rebuilds function object on every call -
         avoid in high-frequency scenarios

**`Note`**

Scope dynamism: Always uses latest `scope` reference (pass-by-reference)

**`Since`**

1.0.0

#### Defined in

[src/new-scoped-function.js:47](https://github.com/snowyu/util-ex.js/blob/49dd796/src/new-scoped-function.js#L47)
