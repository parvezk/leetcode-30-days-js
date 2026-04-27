/**
* @param {Function[]} functions
* @param {number} n
* @return {Promise<any>}
*/
var promisePool = async function (functions, limit) {

   return new Promise((resolve, reject) => {
       const result = [];
       let index = 0, pending = 0;

       const next = () => {
           
           if (index >= functions.length && pending === 0) {
               resolve();
               return;
           }

           while (index < functions.length && pending < limit) {
               const fn = functions[index++];
               pending++;

               fn().then((res) => {                    
                   pending--;
                   next();
               }).catch(error => { reject(error) });
           }
       }
       next();
   })
};

/**
* const sleep = (t) => new Promise(res => setTimeout(res, t));
* promisePool([() => sleep(500), () => sleep(400)], 1)
*   .then(console.log) // After 900ms
*/