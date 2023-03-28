import createFunc from "./_create-function";
import isFunction from "./is/string/function";
import isString from "./is/type/string";

/*
 * Usage:
 *   var fn = newFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
 *
 *   newFunction('function abc(){}');
 *   newFunction('function abc(){}', {log:console.log})
 *   newFunction('function abc(){}', ['log'], [console.log])
 *
 * fn.toString() is :
 * "function yourFuncName(arg1, arg2) {
 *    return log(arg1+arg2);
 *  }"
 */

/**
 * Creates a new function with the given name, arguments, body, scope and values.
 *
 * If only one argument is provided and it is a function, returns a new function with the same code.
 * If only one argument is provided and it is not a function, returns a new empty function with the given name.
 * If multiple arguments are provided, creates a new function with the given name, arguments and body.
 *
 * @param {string|Function} name The name of the function or the function itself.
 * @param {string[]} args An array of argument names for the function.
 * @param {string} body The body of the function.
 * @param {object} scope The scope for the function.
 * @param {object} values The values to apply to the scope.
 * @returns {Function} A new function with the given name, arguments, body, scope and values.
 * @example
 * var add = newFunction('add', ['a', 'b'], 'return a + b;');
 * var result = add(1, 2); // result is 3
 * var greet = newFunction('greet', ['name'], 'console.log("Hello, " + name + "!");');
 * greet('John'); // Output: Hello, John!
 * var fn = newFunction('yourFuncName', ['arg1', 'arg2'], 'return log(arg1+arg2);', {log:console.log});
 * function sub(a,b) {
 *   log(a-b);
 *   return a-b;
 * }
 * var subWithLog=newFunction(sub, {log:console.log})
 * subWithLog(5,2); // print 3
 */
export function newFunction(name, args, body, scope, values) {
  if (arguments.length === 1) {
    if (!isFunction(name)) {
      name = `function ${  name  }(){}`;
    }
    return createFunc(name);
  }
  if (isFunction(name)) {
    scope = args;
    values = body;
  } else {
    if (isString(args)) {
      values = scope;
      scope = body;
      body = args;
      args = [];
    } else if (args == null) {
      args = [];
    }
    name = `function ${  name  }(${  args.join(', ')  }) {\n${  body  }\n}`;
  }
  return createFunc(name, scope, values);
};

// Function(scope, 'return ' + name + ';').apply null, values
export default newFunction;
