[**util-ex**](../../README.md)

***

[util-ex](../../modules.md) / [injectMethods](../README.md) / injectMethods

# Function: injectMethods()

> **injectMethods**(`aObject`, `aMethods`, `aOptions?`): `boolean`

Defined in: [src/injectMethods.js:54](https://github.com/snowyu/util-ex.js/blob/237c1aa529462fe6cbeaa8d09129766e345f5819/src/injectMethods.js#L54)

Injects multiple methods into an object, optionally preserving access to the original methods via "`super`" and original instance via "`self`".

**Note**:

* In the new replaced method, you can use `this.super()` to call the original method, `this.super()` is already bind with original instance.
* The `this[aMethodName]` is the original method, but not bind yet.
* `this.self` is the original instance!

## Parameters

### aObject

`any`

The target object to inject methods into.

### aMethods

`any`

The methods to inject into the aObject.

### aOptions?

`any`

The optional parameters.

## Returns

`boolean`

Whether the injections are successful.

## Example

```ts
var obj = {
  method1: function() {
    console.log('Hello');
  },
  method2: function() {
    console.log('World');
  }
};

var newMethods = {
  method1: function() {
    this.super();
    console.log('New Hello');
  },
  method3: function() {
    console.log('New World');
  }
};

injectMethods(obj, newMethods, { replacedMethods: { method2: true } });

obj.method1(); // Output: Hello\nNew Hello
obj.method2(); // Output: World
obj.method3(); // Output: New World
```
