[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [clone-object](../README.md) / cloneObject

# Function: cloneObject()

> **cloneObject**(`aObject`, `tryCloneFn?`): `any`

Defined in: [src/clone-object.js:28](https://github.com/snowyu/util-ex.js/blob/73676e37e910f2f7119d7eb6da3db13b52e81878/src/clone-object.js#L28)

Clones an object.

## Parameters

### aObject

`any`

The object to be cloned.

### tryCloneFn?

A boolean indicating whether or not to try to clone the object using a '`clone`' function, or a function that can be used to clone the object. If set to `false`, the object will not be cloned using the '`clone`' function, even if it exists.

`boolean` | `Function`

## Returns

`any`

The cloned object.

## Examples

```ts
// Clone a simple object.
const myObject = { foo: 'bar' };
const clonedObject = cloneObject(myObject);
```

```ts
// Clone an object using a custom clone function.
const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
const clonedObject = cloneObject(myObject);
```

```ts
// Clone an object without trying to use a custom clone function.
const myObject = { foo: 'bar', clone: function() { return { foo: this.foo }; } };
const clonedObject = cloneObject(myObject, false);
```
