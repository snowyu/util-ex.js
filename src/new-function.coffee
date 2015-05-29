#Write by http://stackoverflow.com/users/1048572/bergi

###
# Usage:
#   var fn = newFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
#
#   newFunction('function abc(){}');
#   newFunction('function abc(){}', {log:console.log})
#   newFunction('function abc(){}', ['log'], [console.log])
#
# fn.toString() is :
# "function yourFuncName(arg1, arg2) {
#    return log(arg1+arg2);
#  }"
###

isArray     = require('./is/type/array')
isString    = require('./is/type/string')
isObject    = require('./is/type/object')
isFunction  = require('./is/string/function')

module.exports = (name, args, body, scope, values) ->
  if arguments.length == 1
    if isFunction(name)
      return Function('return ' + name + ';')()
    else
      return Function('return function ' + name + '(){};')()
  if isFunction(name)
    scope = args
    values = body
  else
    if isString(args)
      values = scope
      scope = body
      body = args
      args = []
    else if not args?
      args = []
    name = 'function ' + name + '(' + args.join(', ') + ') {\n' + body + '\n}'
  if !isArray(scope) or !isArray(values)
    if isObject(scope)
      keys = Object.keys(scope)
      values = keys.map((k) ->
        scope[k]
      )
      scope = keys
    else
      values = []
      scope = []
  Function(scope, 'return ' + name + ';').apply null, values
