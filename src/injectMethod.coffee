### injectMethod(aObject, aMethodName, aNewMethod)

inject method to an object. You can use `this.super()` to call the original method.
and use `this.self` to get the original `this` object if the original method is exists.


* @param aObject: the target object to inject
* @param aMethodName: the target method to inject
* @param aNewMethod: the new method to be injected into the aObject.

@return (boolean): whether the injection is successful.
###
isFunction  = require('./is/type/function')
isUndefined = require('./is/type/undefined')
module.exports = (aObject, aMethodName, aNewMethod) ->
  inherited = aObject[aMethodName]
  if result = isUndefined(inherited)
    aObject[aMethodName] = aNewMethod
  else if result = isFunction(inherited)
    aObject[aMethodName] = ((inherited, method)->
      return ->
        that = 
          super: => inherited.apply(@,arguments)
          self: @
        method.apply(that, arguments)
    )(inherited, aNewMethod)
  return result
###
* scope*(object)*: the new function scope
module.exports = (aObject, aMethods) ->
  if not isArray(aScope) or not isArray(aValues)
    if isObject(aScope)
      keys = Object.keys(aScope)
      aValues = keys.map (k) -> aScope[k]
      aScope = keys
    else
      aValues = []
      aScope = []
  aScope.push 'inherited'
  if aMethods instanceof Object
    for k,v of aMethods
      continue if not isFunction v
      vOrgMethod = aObject[k]
      if not isFunction vOrgMethod
        aObject[k] = v
      else
        aObject[k] = ((inherited)->
          values = aValues.slice()
          values.push inherited
          Function(aScope, "return "+v).apply(@, values)
        )(vOrgMethod)
###
