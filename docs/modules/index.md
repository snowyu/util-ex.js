[util-ex](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Namespaces

- [export&#x3D;](index.export_.md)

### Variables

- [export&#x3D;](index.md#export&#x3D;)

## Variables

### export&#x3D;

• **export=**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extend` | `any` | - |
| `createObject` | `any` | - |
| `createObjectOld` | (`aClass`: `any`, `aArguments`: `any`) => `any` | - |
| `createObjectWith` | `any` | - |
| `format` | (`f`: `any`, ...`args`: `any`) => `string` | Formats a string using placeholder tokens. If the first argument is a string, it is treated as a format string that specifies placeholders for the subsequent arguments, which will be inserted into the string in place of the placeholders. The placeholders are specified using '%s' for string, '%d' for number, and '%j' for JSON. If the first argument is not a string, all arguments will be inspected and concatenated into a space-separated string. **`Example`** ```ts format('%s %s', 'hello', 'world'); // 'hello world' format('%d %s', 42, 'answer'); // '42 answer' format('%j', { foo: 'bar' }); // '{"foo":"bar"}' format('no placeholders', 'needed'); // 'no placeholders needed' ``` |
| `getConstructor` | `any` | - |
| `inherits` | `any` | Inherit the prototype methods from one constructor into another. The Function.prototype.inherits from lang.js rewritten as a standalone function (not on Function.prototype). NOTE: If this file is to be loaded during bootstrapping this function needs to be rewritten using some native functions as prototype setup using normal JavaScript does not work as expected during bootstrapping (see mirror.js in r114903). **`Param`** Constructor function which needs to inherit the prototype. **`Param`** Constructor function to inherit prototype from. |
| `inheritsDirectly` | `any` | - |
| `inheritsObject` | `any` | - |
| `inject` | typeof [`export=`](inject.md#export=) | - |
| `inspect` | typeof [`export=`](inspect.md#export=) | - |
| `isArguments` | (`value`: `any`) => `boolean` | Checks if a value is an `arguments` object. **`Example`** ```js function myFunction() { return isArguments(arguments); } console.log(myFunction()); // true, since the `arguments` object is an instance of `Arguments` isArguments([1, 2, 3]); // => false ``` |
| `isArray` | (`arg`: `any`) => arg is any[] | - |
| `isBoolean` | (`arg`: `any`) => `boolean` | Determines whether the given argument is a boolean. |
| `isDate` | (`d`: `any`) => `boolean` | Determines whether a value is a date object. |
| `isEmpty` | (`value`: `any`) => `boolean` | Checks if a given value is empty. |
| `isEmptyFunction` | `any` | - |
| `isEmptyObject` | (`obj`: `any`) => `boolean` | Check if an object is empty. |
| `isError` | (`e`: `any`) => `boolean` | - |
| `isFunction` | (`arg`: `any`) => `boolean` | - |
| `isInheritedFrom` | `any` | - |
| `isInheritedFromStr` | `any` | - |
| `isNull` | (`v`: `any`) => `boolean` | - |
| `isNullOrUndefined` | (`arg`: `any`) => `boolean` | - |
| `isNumber` | (`arg`: `any`) => `boolean` | - |
| `isObject` | (`arg`: `any`) => `boolean` | - |
| `isPrimitive` | (`arg`: `any`) => `boolean` | - |
| `isRegExp` | (`v`: `any`) => `boolean` | - |
| `isString` | (`arg`: `any`) => `boolean` | - |
| `isUndefined` | (`arg`: `any`) => `boolean` | - |
| `log` | (...`args`: `any`) => `void` | Logs a message to the console with a timestamp prefix. |
| `newPrototype` | `any` | - |
| `objectToString` | (`o`: `any`) => `string` | The objectToString function returns a string representation of an object's type using the built-in Object.prototype.toString method. The method call Object.prototype.toString.call(o) will return a string in the format [object Type], where Type represents the object's type. For example, if o is an array, the function will return the string [object Array]. If o is a date object, it will return the string [object Date]. This can be useful for determining the type of an object, especially when dealing with values that may be of different types. **`Example`** ```ts objectToString([]); // returns '[object Array]' objectToString({}); // returns '[object Object]' ``` |

#### Defined in

[src/index.js:1](https://github.com/snowyu/util-ex.js/blob/f71e464/src/index.js#L1)
