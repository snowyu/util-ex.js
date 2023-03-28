import isString from "./is/type/string";
import isNumber from "./is/type/number";
import isNull from "./is/type/null";
import isError from "./is/type/error";
import isDate from "./is/type/date";
import isRegExp from "./is/type/regexp";
import isFunction from "./is/type/function";
import isArray from "./is/type/array";
import isUndefined from "./is/type/undefined";
import _extend from "./_extend";
import isBoolean from "./is/type/boolean";
import * as shims from "./_shims";

const hasOwnProperty = Object.prototype.hasOwnProperty;

/* legacy: obj, showHidden, depth, colors */
/**
 * Return a string representation of an object, including its properties and nested objects, with customizable options.
 *
 * Echos the value of a value. Try to print the value out
 * in the best way possible given the different types.
 *
 * @param {*} obj - The object to inspect.
 * @param {object|boolean=} opts - Customizable options to control the behavior of the inspection. If it's a boolean, it sets the "showHidden" option.
 * @param {boolean=false} opts.showHidden - Whether to show non-enumerable properties of objects.
 * @param {number=2} opts.depth - How many levels deep nested objects are inspected.
 * @param {boolean=false} opts.colors - Whether to color the output.
 * @param {boolean=true} opts.customInspect - Whether to inspect custom inspect functions on objects.
 * @returns {string} The formatted string representing the object.
 */
export function inspect(obj, opts) {
  // default options
  const ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3)
ctx.depth = arguments[2];
  if (arguments.length >= 4)
ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden))
ctx.showHidden = false;
  if (isUndefined(ctx.depth))
ctx.depth = 2;
  if (isUndefined(ctx.colors))
ctx.colors = false;
  if (isUndefined(ctx.customInspect))
ctx.customInspect = true;
  if (ctx.colors)
ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  const style = inspect.styles[styleType];
  if (style) {
    return `\u001B[${  inspect.colors[style][0]  }m${  str  }\u001B[${  inspect.colors[style][1]  }m`;
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  const hash = {};
  array.forEach((val, idx) => {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    let ret = value.inspect(recurseTimes);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  const primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  let keys = shims.keys(value);
  const visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = shims.getOwnPropertyNames(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      const name = value.name ? `: ${  value.name}` : '';
      return ctx.stylize(`[Function${  name  }]`, 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  let base = '';
    let array = false;
    let braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    const n = value.name ? `: ${  value.name}` : '';
    base = ` [Function${  n  }]`;
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ` ${  RegExp.prototype.toString.call(value)}`;
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ` ${  Date.prototype.toUTCString.call(value)}`;
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ` ${  formatError(value)}`;
  }
  if (keys.length === 0 && (!array || value.length === 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }
  ctx.seen.push(value);
  let output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map((key) => {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value))
return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    const simple = `'${  JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"')  }'`;
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
return ctx.stylize(`${  value}`, 'number');
  if (isBoolean(value))
return ctx.stylize(`${  value}`, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
return ctx.stylize('null', 'null');
}

function formatError(value) {
  return `[${  Error.prototype.toString.call(value)  }]`;
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  const output = [];
  for (let i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach((key) => {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  let name, str;
  const desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty.call(visibleKeys, key)) {
    name = `[${  key  }]`;
  }
  if (!str) {
    if (!ctx.seen.includes(desc.value)) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.includes('\n')) {
        if (array) {
          str = str.split('\n').map((line) => {
            return `  ${  line}`;
          }).join('\n').substr(2);
        } else {
          str = `\n${  str.split('\n').map((line) => {
            return `   ${  line}`;
          }).join('\n')}`;
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify(`${  key}`);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }
  return `${name  }: ${  str}`;
}

function reduceToSingleString(output, base, braces) {
  let numLinesEst = 0;
  const length = output.reduce((prev, cur) => {
    numLinesEst++;
    if (cur.includes('\n'))
numLinesEst++;
    return prev + cur.replace(/\u001B\[\d\d?m/g, '').length + 1;
  }, 0);
  if (length > 60) {
    return `${braces[0] + (base === '' ? '' : `${base  }\n `)  } ${  output.join(',\n  ')  } ${  braces[1]}`;
  }
  return `${braces[0] + base  } ${  output.join(', ')  } ${  braces[1]}`;
}
export default inspect;
