/**
* @param {Array<Function>} functions
* @return {Promise<any>}
*/
var promiseAll = function (functions) {
   const all = [];
   const result = new Array(functions.length).fill(null);
   
   return new Promise(async (resolve, reject) => {
       let count = 0;

       functions.forEach(func => {
           const fn = func();
           all.push(fn);
       });

       all.forEach((promise, i) => {
           promise.then(value => {
               count++;
               result[i] = value
               if (count === all.length) resolve(result)

           }).catch(error => {
               reject(error);
           })
       })
   })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/