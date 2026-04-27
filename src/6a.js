/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    
    arr.forEach((val, idx) => {
        if (Boolean(fn(val, idx)))
            filteredArr.push(val);
    })

    return filteredArr;
};