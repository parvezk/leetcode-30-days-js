/**
* @param {null|boolean|number|string|Array|Object} o1
* @param {null|boolean|number|string|Array|Object} o2
* @return {boolean}
*/
var areDeeplyEqual = function (o1, o2) {
   if (o1 === o2) return true;
   if (o1 === null || o2 === null) return false;
   if (String(o1) !== String(o2)) return false;
   if (typeof o1 !== 'object') return Object.is(o1, o2)

   if (Array.isArray(o1)) {
       if (o1.length !== o2.length) return false;

       for (let i = 0; i < o1.length; i++) {
           if (!areDeeplyEqual(o1[i], o2[i])) return false;
       }

       return true;
   }
   if (!(o1 instanceof Object) || !(o2 instanceof Object)) return false; //optional
   if (Object.keys(o1).length !== Object.keys(o2).length) return false;

   for (const key in o1) {
       if (!Object.hasOwn(o2, key) || !areDeeplyEqual(o1[key], o2[key]))
           return false;
   }

   return true;
};

const helper = (key, value) => {
   if (value && typeof value === 'object' && !Array.isArray(value)) {
       return Object.fromEntries(Object.entries(value).sort()) // default string comparison
   } else
       return value;
}

var areDeeplyEqual = function (o1, o2) {
   const obj1 = JSON.stringify(o1, helper);
   const obj2 = JSON.stringify(o2, helper);

   return obj1 === obj2;
}