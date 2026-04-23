/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  let res = 0;
  const promise = Promise.all([promise1, promise2]);

  await promise.then((values) => {
    for (const val of values) res += val;
  });
  return res;
};

var addTwoPromises = async function (promise1, promise2) {
  let res = 0;
  const promise = Promise.all([promise1, promise2]);

  await promise.then(([a, b]) => {
    res = a + b;
  });
  return res;
};

var addTwoPromises = async function (promise1, promise2) {
  const promise = Promise.all([promise1, promise2]);

  return await promise.then((values) => values.reduce((acc, val) => (acc += val), 0));
};

var addTwoPromises = async function (promise1, promise2) {
  const [a, b] = await Promise.all([promise1, promise2]);
  return a + b;
};

var addTwoPromises = async (promise1, promise2) =>
  await Promise.all([promise1, promise2]).then(([a, b]) => a + b);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
