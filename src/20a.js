/**
* @param {Object|Array} obj
* @return {boolean}
*/
var isEmpty = (obj) => {
   for (let prop in obj) {
       if (obj.hasOwnProperty(prop))
           return false;
   }
   return true;
}

var isEmpty = function (obj) {
   const item = Object.getOwnPropertyNames(obj)
   return Array.isArray(item) && item.length ? false : true;
};

var isEmpty = function (obj) {
   for (let prop in obj) {
       if (Object.hasOwn(obj, prop))
           return false;
   }

   return true;
};

var isEmpty = obj => obj.constructor === Object && JSON.stringify(obj) === "{}";

var isEmpty = (obj) => obj && Object.keys(obj).length === 0;