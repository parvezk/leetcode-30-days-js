/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let accum = init;
  if (!nums.length) return accum;

  // for (let i = 0; i < nums.length; i++)
  //     accum = fn(accum, nums[i])
  nums.forEach((num) => (accum = fn(accum, num)));

  return accum;
};
