/**
* @param {null|boolean|number|string|Array|Object} object
* @return {string}
*/
var jsonStringify = function (object) {

   if (typeof object !== 'object' || object === null)
       return typeof object === 'string' ? `"${object}"` : String(object);

   if (Array.isArray(object)) {
       const items = object.map(item => jsonStringify(item));
       return `[${items.join(',')}]`;
   }

   if (typeof object === 'object' || object instanceof Object) {
       const obj = Object.entries(object).map(([key, val]) => `"${key}":${jsonStringify(val)}`);
       return `{${obj.join(',')}}`;
   }

   return String(object);
};

var jsonStringify = function (object) {
   switch (typeof object) {
       case "object":
           if (Array.isArray(object)) {
               const items = object.map(item => jsonStringify(item));
               return `[${items.join(',')}]`;

           } else if (object) {
               let obj = Object.entries(object);
               obj = obj.map(([key, val]) => `"${key}":${jsonStringify(val)}`);
               return `{${obj.join(',')}}`;
               
           } else
               return 'null';
       case "string":
           return `"${object}"`;
       case "number":
       case "boolean":
           return String(object);

       default:
           return ""
   }
};