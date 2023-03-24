[util-ex](../README.md) / [Exports](../modules.md) / injectMethod

# Module: injectMethod

## Table of contents

### Functions

- [export&#x3D;](injectMethod.md#export&#x3D;)

## Functions

### export&#x3D;

▸ **export=**(`aObject`, `aMethodName`, `aNewMethod`): `boolean`

Injects method into an object. optionally preserving access to the original method via "`super`" and original instance via "`self`".

**Note**:

* In the new method, you can use `this.super()` to call the original method, `this.super()` is already bound with original instance.
* The `this[aMethodName]` is also the original method, but not bound yet.
* `this.self` is the original instance!

**`Example`**

```ts
var obj = {
  method1: function() {
    console.log('Hello');
  }
};

var newMethod = function() {
  this.super();
  console.log('World');
};

injectMethod(obj, 'method1', newMethod);

obj.method1(); // Output: Hello\nWorld
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | the target object to inject |
| `aMethodName` | `string` | the target method to inject |
| `aNewMethod` | `Function` | the new method to be injected into the aObject. |

#### Returns

`boolean`

whether the injection is successful.

#### Defined in

[src/injectMethod.js:32](https://github.com/snowyu/util-ex.js/blob/f71e464/src/injectMethod.js#L32)
