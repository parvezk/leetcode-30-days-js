/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    //without using args.length;
    return args.reduce(acc => ++acc, 0);
};

/**
 * argumentsLength(1, 2, 3); // 3
 */