[util-ex](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### References

- [FilterFn](index.md#filterfn)
- [\_createFunction](index.md#_createfunction)
- [\_extend](index.md#_extend)
- [cloneObject](index.md#cloneobject)
- [clonePropertiesTo](index.md#clonepropertiesto)
- [createFunction](index.md#createfunction)
- [defineProperty](index.md#defineproperty)
- [extend](index.md#extend)
- [format](index.md#format)
- [getAllNames](index.md#getallnames)
- [getNonEnumerableNames](index.md#getnonenumerablenames)
- [inject](index.md#inject)
- [injectMethod](index.md#injectmethod)
- [injectMethods](index.md#injectmethods)
- [inspect](index.md#inspect)
- [isArguments](index.md#isarguments)
- [isArray](index.md#isarray)
- [isBool](index.md#isbool)
- [isBuffer](index.md#isbuffer)
- [isDate](index.md#isdate)
- [isEmpty](index.md#isempty)
- [isEmptyObject](index.md#isemptyobject)
- [isError](index.md#iserror)
- [isFloatStr](index.md#isfloatstr)
- [isFunction](index.md#isfunction)
- [isFunctionStr](index.md#isfunctionstr)
- [isInList](index.md#isinlist)
- [isInt](index.md#isint)
- [isIntStr](index.md#isintstr)
- [isJson](index.md#isjson)
- [isNull](index.md#isnull)
- [isNullOrUndefined](index.md#isnullorundefined)
- [isNumber](index.md#isnumber)
- [isObject](index.md#isobject)
- [isPrimitive](index.md#isprimitive)
- [isRegExp](index.md#isregexp)
- [isRegExpStr](index.md#isregexpstr)
- [isString](index.md#isstring)
- [isUndefined](index.md#isundefined)
- [log](index.md#log)
- [map](index.md#map)
- [newFunction](index.md#newfunction)
- [objectToString](index.md#objecttostring)
- [toRegExp](index.md#toregexp)

### Functions

- [isEmptyFunction](index.md#isemptyfunction)

## References

### FilterFn

Re-exports [FilterFn](extend.md#filterfn)

___

### \_createFunction

Re-exports [_createFunction](create_function.md#_createfunction)

___

### \_extend

Re-exports [_extend](extend.md#_extend)

___

### cloneObject

Re-exports [cloneObject](clone_object.md#cloneobject)

___

### clonePropertiesTo

Re-exports [clonePropertiesTo](clone_properties_to.md#clonepropertiesto)

___

### createFunction

Re-exports [createFunction](createFunction.md#createfunction)

___

### defineProperty

Re-exports [defineProperty](defineProperty.md#defineproperty)

___

### extend

Re-exports [extend](extend.md#extend)

___

### format

Re-exports [format](format.md#format)

___

### getAllNames

Re-exports [getAllNames](object_get_all_names.md#getallnames)

___

### getNonEnumerableNames

Re-exports [getNonEnumerableNames](object_get_non_enumerable_names.md#getnonenumerablenames)

___

### inject

Re-exports [inject](inject.md#inject)

___

### injectMethod

Re-exports [injectMethod](injectMethod.md#injectmethod)

___

### injectMethods

Re-exports [injectMethods](injectMethods.md#injectmethods)

___

### inspect

Re-exports [inspect](inspect.md#inspect)

___

### isArguments

Re-exports [isArguments](is_type_arguments.md#isarguments)

___

### isArray

Re-exports [isArray](is_type_array.md#isarray)

___

### isBool

Re-exports [isBool](is_type_boolean.md#isbool)

___

### isBuffer

Re-exports [isBuffer](is_type_buffer.md#isbuffer)

___

### isDate

Re-exports [isDate](is_type_date.md#isdate)

___

### isEmpty

Re-exports [isEmpty](is_empty.md#isempty)

___

### isEmptyObject

Re-exports [isEmptyObject](is_empty_object.md#isemptyobject)

___

### isError

Re-exports [isError](is_type_error.md#iserror)

___

### isFloatStr

Re-exports [isFloatStr](is_string_float.md#isfloatstr)

___

### isFunction

Re-exports [isFunction](is_type_function.md#isfunction)

___

### isFunctionStr

Re-exports [isFunctionStr](is_string_function.md#isfunctionstr)

___

### isInList

Re-exports [isInList](is_in.md#isinlist)

___

### isInt

Re-exports [isInt](is_type_integer.md#isint)

___

### isIntStr

Re-exports [isIntStr](is_string_int.md#isintstr)

___

### isJson

Re-exports [isJson](is_string_json.md#isjson)

___

### isNull

Re-exports [isNull](is_type_null.md#isnull)

___

### isNullOrUndefined

Re-exports [isNullOrUndefined](is_type_null_or_undefined.md#isnullorundefined)

___

### isNumber

Re-exports [isNumber](is_type_number.md#isnumber)

___

### isObject

Re-exports [isObject](is_type_object.md#isobject)

___

### isPrimitive

Re-exports [isPrimitive](is_type_primitive.md#isprimitive)

___

### isRegExp

Re-exports [isRegExp](is_type_regexp.md#isregexp)

___

### isRegExpStr

Re-exports [isRegExpStr](is_string_regexp.md#isregexpstr)

___

### isString

Re-exports [isString](is_type_string.md#isstring)

___

### isUndefined

Re-exports [isUndefined](is_type_undefined.md#isundefined)

___

### log

Re-exports [log](log.md#log)

___

### map

Re-exports [map](object_map.md#map)

___

### newFunction

Re-exports [newFunction](new_function.md#newfunction)

___

### objectToString

Re-exports [objectToString](object_to_string.md#objecttostring)

___

### toRegExp

Re-exports [toRegExp](to_regexp.md#toregexp)

## Functions

### isEmptyFunction

▸ **isEmptyFunction**(`aFunc`): `boolean`

Checks whether a given function is empty or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `aFunc` | `Function` | The function to be checked. |

#### Returns

`boolean`

- True if the function is empty, false otherwise.

**`Example`**

```ts
isEmptyFunction(Array.prototype.push); // -> false
isEmptyFunction(()=>{}); // -> true
```

#### Defined in

node_modules/inherits-ex/lib/isEmptyFunction.d.ts:10
