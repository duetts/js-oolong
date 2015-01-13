/**
 * @class Objectware
 */

/**
 * Assigns all `enumerable` properties on `source` objects to `target`.  
 * Similar to `Object.assign`, but takes inherited properties into account.
 *
 * Think of it as _extending_ the first object step by step with others.
 *
 * @example
 * Objectware.assign({name: "John"}, {age: 32}, {shirt: "blue"})
 * // => {name: "John", age: 32, shirt: "blue"}
 *
 * @static
 * @method assign
 * @param target
 * @param source...
 */
exports.assign = function(target) {
  if (target) for (var i = 1; i < arguments.length; ++i) {
    var source = arguments[i]
    for (var key in source) target[key] = source[key]
  }

  return target
}

/**
 * Creates a shallow clone of the given object, taking all `enumerable`
 * properties into account.  
 * Shallow means if you've got nested objects, those will be shared.
 *
 * @example
 * Objectware.clone({name: "John", age: 32})
 * // => {name: "John", age: 32}
 *
 * @static
 * @method clone
 * @param object
 */
exports.clone = function(obj) {
  return obj ? exports.assign({}, obj) : obj
}

/**
 * Checks whether the given object has any `enumerable` properties, inherited
 * or not.
 *
 * @example
 * Objectware.isEmpty({name: "John"}) // => false
 * Objectware.isEmpty(Object.create({name: "John"})) // => false
 * Objectware.isEmpty({}) // => true
 *
 * @static
 * @method isEmpty
 * @param object
 */
exports.isEmpty = function(obj) {
  for (obj in obj) return false
  return true
}
