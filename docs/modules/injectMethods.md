[util-ex](../README.md) / [Exports](../modules.md) / injectMethods

# Module: injectMethods

## Table of contents

### Namespaces

- [export&#x3D;](injectMethods.export_.md)

### Functions

- [export&#x3D;](injectMethods.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aObject`, `aMethods`, `aOptions?`): `boolean`

Injects multiple methods into an object, optionally preserving access to the original methods via "`super`" and original instance via "`self`".

**Note**:

* In the new replaced method, you can use `this.super()` to call the original method, `this.super()` is already bind with original instance.
* The `this[aMethodName]` is the original method, but not bind yet.
* `this.self` is the original instance!

**`Example`**

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | The target object to inject methods into. |
| `aMethods` | `any` | The methods to inject into the aObject. |
| `aOptions?` | `any` | The optional parameters. |

#### Returns

`boolean`

Whether the injections are successful.

#### Defined in

[src/injectMethods.js:55](https://github.com/snowyu/util-ex.js/blob/0666556/src/injectMethods.js#L55)
