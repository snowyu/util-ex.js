[util-ex](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Namespaces

- [export=](index.export_.md)

### Variables

- [export=](index.md#export=)

## Variables

### export&#x3D;

• **export=**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_extend` | `any` | - |
| `createObject` | `__module` | - |
| `createObjectOld` | (`aClass`: `any`, `aArguments`: `any`) => `any` | - |
| `createObjectWith` | `__module` | - |
| `format` | (`f`: `any`, ...`args`: `any`) => `string` | Formats a string using placeholder tokens. If the first argument is a string, it is treated as a format string that specifies placeholders for the subsequent arguments, which will be inserted into the string in place of the placeholders. The placeholders are specified using '%s' for string, '%d' for number, and '%j' for JSON. If the first argument is not a string, all arguments will be inspected and concatenated into a space-separated string. **`Example`** ```ts format('%s %s', 'hello', 'world'); // 'hello world' format('%d %s', 42, 'answer'); // '42 answer' format('%j', { foo: 'bar' }); // '{"foo":"bar"}' format('no placeholders', 'needed'); // 'no placeholders needed' ``` |
| `getConstructor` | `__module` | - |
| `getNonEnumerableNames` | (`aObject`: `any`) => `string`[] | Returns an array of non-enumerable property names of an object. **`Example`** ```ts var obj = Object.create(null, { a: { value: 1 }, b: { value: 2, enumerable: true } }); var nonEnumProps = getNonEnumerableNames(obj); // nonEnumProps = ['a'] ``` |
| `inherits` | `__module` | Inherit the prototype methods from one constructor into another. The Function.prototype.inherits from lang.js rewritten as a standalone function (not on Function.prototype). NOTE: If this file is to be loaded during bootstrapping this function needs to be rewritten using some native functions as prototype setup using normal JavaScript does not work as expected during bootstrapping (see mirror.js in r114903). **`Param`** Constructor function which needs to inherit the prototype. **`Param`** Constructor function to inherit prototype from. |
| `inheritsDirectly` | `__module` | - |
| `inheritsObject` | `__module` | - |
| `inject` | typeof [`export=`](inject.md#export=) | - |
| `injectMethod` | (`aObject`: `any`, `aMethodName`: `string`, `aNewMethod`: `Function`) => `boolean` | Injects method into an object. optionally preserving access to the original method via "`super`" and original instance via "`self`". **Note**: * In the new method, you can use `this.super()` to call the original method, `this.super()` is already bound with original instance. * The `this[aMethodName]` is also the original method, but not bound yet. * `this.self` is the original instance! **`Example`** ```ts var obj = { method1: function() { console.log('Hello'); } }; var newMethod = function() { this.super(); console.log('World'); }; injectMethod(obj, 'method1', newMethod); obj.method1(); // Output: Hello\nWorld ``` |
| `injectMethods` | (`aObject`: `any`, `aMethods`: `any`, `aOptions?`: `any`) => `boolean` | Injects multiple methods into an object, optionally preserving access to the original methods via "`super`" and original instance via "`self`". **Note**: * In the new replaced method, you can use `this.super()` to call the original method, `this.super()` is already bind with original instance. * The `this[aMethodName]` is the original method, but not bind yet. * `this.self` is the original instance! **`Example`** ```ts var obj = { method1: function() { console.log('Hello'); }, method2: function() { console.log('World'); } }; var newMethods = { method1: function() { this.super(); console.log('New Hello'); }, method3: function() { console.log('New World'); } }; injectMethods(obj, newMethods, { replacedMethods: { method2: true } }); obj.method1(); // Output: Hello\nNew Hello obj.method2(); // Output: World obj.method3(); // Output: New World ``` |
| `inspect` | typeof [`export=`](inspect.md#export=) | - |
| `isArguments` | (`value`: `any`) => `boolean` | Checks if a value is an `arguments` object. **`Example`** ```js function myFunction() { return isArguments(arguments); } console.log(myFunction()); // true, since the `arguments` object is an instance of `Arguments` isArguments([1, 2, 3]); // => false ``` |
| `isArray` | (`arg`: `any`) => arg is any[] | - |
| `isBoolean` | (`arg`: `any`) => `boolean` | Determines whether the given argument is a boolean. |
| `isDate` | (`d`: `any`) => `boolean` | Determines whether a value is a date object. |
| `isEmpty` | (`value`: `any`) => `boolean` | Checks if a given value is empty. |
| `isEmptyFunction` | `__module` | - |
| `isEmptyObject` | (`obj`: `any`) => `boolean` | Check if an object is empty. |
| `isError` | (`e`: `any`) => `boolean` | - |
| `isFloatStr` | (`str`: `string`) => `boolean` | Checks if a string represents a valid floating point number. **`Example`** ```ts isFloatStr('3.14'); // returns true isFloatStr('-0.5'); // returns true isFloatStr('2.718e0'); // returns true isFloatStr('2.718e-2'); // returns true isFloatStr('abc'); // returns false ``` |
| `isFunction` | (`arg`: `any`) => `boolean` | - |
| `isFunctionStr` | [`is/string/function`](is_string_function.md) | - |
| `isInheritedFrom` | `__module` | - |
| `isInheritedFromStr` | `__module` | - |
| `isIntStr` | (`str`: `string`) => `boolean` | Checks if a given string represents an integer number. **`Example`** ```ts isIntStr('42'); // true isIntStr('0'); // true isIntStr('-123'); // true isIntStr('12.3'); // false isIntStr('1e3'); // false ``` |
| `isJson` | (`v`: `string`, `almost`: `boolean`) => `boolean` | Checks if a string is a valid JSON string. **`Example`** ```ts isJson('{"name": "John", "age": 30}'); // true isJson('[1, 2, 3]'); // true isJson('{"name": "John", "age": 30'); // false isJson('This is not a JSON string.'); // false ``` |
| `isNull` | (`v`: `any`) => `boolean` | - |
| `isNullOrUndefined` | (`arg`: `any`) => `boolean` | - |
| `isNumber` | (`arg`: `any`) => `boolean` | - |
| `isObject` | (`arg`: `any`) => `boolean` | - |
| `isPrimitive` | (`arg`: `any`) => `boolean` | - |
| `isRegExp` | (`v`: `any`) => `boolean` | - |
| `isString` | (`arg`: `any`) => `boolean` | - |
| `isUndefined` | (`arg`: `any`) => `boolean` | - |
| `log` | (...`args`: `any`) => `void` | Logs a message to the console with a timestamp prefix. |
| `map` | (`aObject`: `any`, `aOptions?`: \{ `enumerable`: `boolean` ; `nonEnumerable`: `boolean`  }) => `any`[] | Returns an array containing the values of all enumerable or non-enumerable properties of an object. **`Example`** ```ts const myObj = {a: 1, b: 2, c: 3}; Object.defineProperty(myObj, 'p', { value: 'value2', enumerable: false }); // Returns [1, 2, 3] const result1 = map(myObj); // Returns ['value2'] const result2 = map(myObj, {enumerable: false, nonEnumerable: true}); ``` |
| `newPrototype` | `__module` | - |
| `objectToString` | (`o`: `any`) => `string` | The objectToString function returns a string representation of an object's type using the built-in Object.prototype.toString method. The method call Object.prototype.toString.call(o) will return a string in the format [object Type], where Type represents the object's type. For example, if o is an array, the function will return the string [object Array]. If o is a date object, it will return the string [object Date]. This can be useful for determining the type of an object, especially when dealing with values that may be of different types. **`Example`** ```ts objectToString([]); // returns '[object Array]' objectToString({}); // returns '[object Object]' ``` |

#### Defined in

[src/index.js:1](https://github.com/snowyu/util-ex.js/blob/cfd4615/src/index.js#L1)
