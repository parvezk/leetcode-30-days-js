/**
* @param {Array} arr
* @param {number} size
* @return {Array}
*/
var chunk = function (arr, size) {
   const res = [], temp = [];

   while (arr.length) {
       const el = arr.shift();

       if (temp.length >= size) {
           res.push(temp.slice());
           temp.length = 0;
       }

       temp.push(el);

   }
   if (temp.length) res.push(temp);
   return res;
};
