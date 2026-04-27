/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {

        return new Promise((resolve, reject) => {
            try {
                const promisedFn = fn(...args);

                promisedFn
                    .then((result) => resolve(result))
                    .catch(error => reject(error))
                    .finally(() =>  clearTimeout(timeoutId));

                const timeoutId = setTimeout(() => {
                    reject("Time Limit Exceeded");
                }, t);

            } catch (error) {
                console.log(`error: ${error}`)
                reject(error)
            }
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

/*  return async function (...args) {
        let promiseFn = fn(args);

        new Promise((resolve, reject) => {

            setTimeout(() => {
                promiseFn.then((result) => {
                    console.log('resolved')
                    //resolve(result);
                })
            }, t);
        });
    } */