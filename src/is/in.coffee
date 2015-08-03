isRegExp        = require('./type/regexp')

module.exports = (str, list, caseSensitive)->
  str = str.toLowerCase() unless caseSensitive
  for item in list
    if isRegExp item
      result = item.test str
      break if result
    else
      item = item.toString()
      item = item.toLowerCase() unless caseSensitive
      result = item is str
      break if result
  result
