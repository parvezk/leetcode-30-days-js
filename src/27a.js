/**
* @param {Object|Array} obj
* @return {Object|Array}
*/
var compactObject = function (obj) {
   let output = Array.isArray(obj) ? [] : {};

   if (Array.isArray(obj)) {
       for (const item of obj) {
           if (typeof item === 'object' && item instanceof Object) {
               output.push(compactObject(item))
           } else {
               if (item) output.push(item);
           }
       }
   } else {
       for (const [key, val] of Object.entries(obj)) {
           if (typeof val === 'object' && val instanceof Object) {
               output[key] = compactObject(val);
           } else {
               if (val) output[key] = val
           }
       }
   }
   return output;
};