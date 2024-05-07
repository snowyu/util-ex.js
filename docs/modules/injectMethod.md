[util-ex](../README.md) / [Exports](../modules.md) / injectMethod

# Module: injectMethod

## Table of contents

### References

- [default](injectMethod.md#default)

### Functions

- [injectMethod](injectMethod.md#injectmethod)

## References

### default

Renames and re-exports [injectMethod](injectMethod.md#injectmethod)

## Functions

### injectMethod

▸ **injectMethod**(`aObject`, `aMethodName`, `aNewMethod`): `boolean`

Injects method into an object. optionally preserving access to the original method via "`super`" and original instance via "`self`".

**Note**:

* In the new method, you can use `this.super()` to call the original method, `this.super()` is already bound with original instance.
* The `this[aMethodName]` is also the original method, but not bound yet.
* `this.self` is the original instance!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aObject` | `any` | the target object to inject |
| `aMethodName` | `string` | the target method to inject |
| `aNewMethod` | `Function` | the new method to be injected into the aObject. |

#### Returns

`boolean`

whether the injection is successful.

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

#### Defined in

[src/injectMethod.js:31](https://github.com/snowyu/util-ex.js/blob/bfdf9ef/src/injectMethod.js#L31)
