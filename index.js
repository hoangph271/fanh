/**
 * Get the reversed boolean value, useful for avoiding the "!"
 * @param {any} val value to test against
 * @return {boolean} reversed value of val
 */
const NOT = val => !val

/**
 * Get the inverted version of the given function, useful for things like:
 * const isNOTNumber = invert(isNumber)
 * @param {function} fn
 * @return {function} inverted
 */
const invert = fn => {
  if (typeof fn !== 'function') {
    throw new TypeError(`fn must be a function, received ${typeof fn}`)
  }

  return (...args) => !fn(...args)
}

module.exports = {
  NOT,
  invert,
}
