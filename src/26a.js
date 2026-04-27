/**
* @param {Array} arr
* @param {number} depth
* @return {Array}
*/
var flat = function (arr, n) {

   while (n > 0) {
       arr = arr.flat()
       n--;
   }
   return arr;
};

var flat = function (arr, n) {
   const helper = (array, depth = 0) => {
       if (depth >= n) return array;

       let result = [];
       for (const item of array) {
           if (Array.isArray(item))
               result = result.concat(helper(item, depth + 1))
           else
               result.push(item)
       }
       return result;
   }
   return helper(arr);
}

var flat = function (arr, n) {
   const helper = (input, depth) => {
       if (depth >= n) return input;

       const out = [];
       for (const item of input) {
           if (Array.isArray(item))
               out.push(...helper(item, depth + 1));
           else
               out.push(item);
       }
       return out;

   }
   return helper(arr, 0);
}