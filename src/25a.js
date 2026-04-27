/**
* @param {Array} arr1
* @param {Array} arr2
* @return {Array}
*/
// var join = function (arr1, arr2) {
//     let output = arr1.slice();

//     for (const obj of arr2) {
//         const idx = output.findIndex(o => o.id === obj.id)

//         if (idx >= 0)             
//             output[idx] = Object.assign({}, output[idx], obj)
//         else
//             output.push(obj);
//     }

//     output.sort((a, b) => a.id - b.id);
//     return output;
// };

var join = function (arr1, arr2) {
   let output = [];
   const indicesMap = new Map();

   arr1.forEach((obj, i) => {
       indicesMap.set(obj.id, i)
       output.push(obj)
   })

   for (const obj of arr2) {
       const key = obj.id;

       if (indicesMap.has(key)) {
           const idx = indicesMap.get(key);
           output[idx] = Object.assign({}, output[idx], obj)
       } else
           output.push(obj);
   }

   output.sort((a, b) => a.id - b.id);
   return output;
};