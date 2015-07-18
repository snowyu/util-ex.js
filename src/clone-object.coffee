isFunction        = require './is/type/function'
extend            = require './_extend'
clonePropertiesTo = require './clone-properties-to'
createObject      = require 'inherits-ex/lib/createObject'

module.exports  = cloneObject = (aObject, tryCloneFn)->
  if tryCloneFn isnt false and isFunction aObject.clone
    result = aObject.clone()
  else
    ctor = aObject.Class || aObject.constructor
    result = createObject ctor
    clonePropertiesTo result, aObject
    
  result