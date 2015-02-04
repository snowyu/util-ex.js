isFunction = (v)-> 'function' is typeof v

module.exports = (dest, sources, filter)->
  sources = [sources] if not isArray sources
  if isFunction filter
    for src in sources
      continue unless src and src instanceof Object
      keys = Object.keys(src)
      for key,value in keys
        dest[key] = value if filter(key, value)
  else
    for src in sources
      continue unless src and src instanceof Object
      keys = Object.keys(src)
      for key in keys
        dest[key] = src[key]
  dest

