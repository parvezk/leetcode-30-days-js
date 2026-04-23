/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const input = args.join(",");
    if (map.has(input)) return map.get(input);

    map.set(input, fn(...args));
    return map.get(input);
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
